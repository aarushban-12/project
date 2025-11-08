import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>🍰 Sweet Treats</h2>
      <div style={styles.links}>
        {user ? (
          <>
            <Link style={styles.link} to="/home">Home</Link>
            <Link style={styles.link} to="/about">About</Link>
            <Link style={styles.link} to="/menu">Menu</Link>
            <button onClick={handleLogout} style={styles.logout}>Logout</button>
          </>
        ) : (
          <>
            <Link style={styles.link} to="/">Login</Link>
            <Link style={styles.link} to="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffb84d",
    padding: "1rem 2rem",
    borderRadius: "0 0 15px 15px",
  },
  logo: { margin: 0 },
  links: { display: "flex", gap: "1.5rem", alignItems: "center" },
  link: {
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
    fontSize: "1.1rem",
  },
  logout: {
    background: "#ff7043",
    border: "none",
    borderRadius: "8px",
    color: "white",
    fontWeight: "bold",
    padding: "0.5rem 1rem",
    cursor: "pointer",
  },
};
