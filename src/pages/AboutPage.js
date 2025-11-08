import React from "react";

export default function AboutPage() {
  return (
    <div style={styles.container}>
      <h1>About Sweet Treats Bakery</h1>
      <p>
        We are a family-owned bakery passionate about bringing joy through our
        handcrafted pastries, cookies, and breads. Everything we make is baked
        fresh daily with love and the finest ingredients.
      </p>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", padding: "3rem" },
};
