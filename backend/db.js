const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./bakery.db");

db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE,
    password_hash TEXT,
    name TEXT
  )
`);


module.exports = db;
