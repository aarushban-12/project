const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

// Signup route
app.post("/api/signup", (req, res) => {
  const { email, password, name } = req.body;

  if (!email || !password || !name) {
    return res.status(400).json({ error: "All fields required" });
  }

  const passwordHash = bcrypt.hashSync(password, 10);

  const query = `INSERT INTO users (email, password_hash, name) VALUES (?, ?, ?)`;
  db.run(query, [email, passwordHash, name], function (err) {
    if (err) {
      if (err.message.includes("UNIQUE constraint failed")) {
        return res.status(400).json({ error: "Email already exists" });
      }
      return res.status(500).json({ error: "Database error" });
    }
    res.json({ success: true, id: this.lastID });
  });
});

// Login route
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Missing email or password" });
  }

  db.get(`SELECT * FROM users WHERE email = ?`, [email], (err, user) => {
    if (err) return res.status(500).json({ error: "Database error" });
    if (!user) return res.status(400).json({ error: "User not found" });

    const valid = bcrypt.compareSync(password, user.password_hash);
    if (!valid) return res.status(401).json({ error: "Invalid password" });

    res.json({ success: true, user: { id: user.id, email: user.email, name: user.name } });
  });
});

app.listen(5000, () => console.log("✅ Server running on http://localhost:5000"));
