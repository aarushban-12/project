import React from "react";

export default function HomePage() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div style={styles.container}>
      <h1>Welcome back, {user?.name}!</h1>
      <p>We’re glad to have you at Sweet Treats Bakery 🍪</p>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", padding: "3rem" },
};
