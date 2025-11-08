import React from "react";

export default function MenuPage() {
  const menu = [
    { name: "Chocolate Chip Cookies", price: "$2.50" },
    { name: "Blueberry Muffin", price: "$3.00" },
    { name: "Croissant", price: "$3.50" },
    { name: "Cinnamon Roll", price: "$4.00" },
  ];

  return (
    <div style={styles.container}>
      <h1>Our Menu</h1>
      <ul style={styles.list}>
        {menu.map((item, i) => (
          <li key={i} style={styles.item}>
            <span>{item.name}</span>
            <span>{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", padding: "3rem" },
  list: { listStyle: "none", padding: 0, maxWidth: 400, margin: "auto" },
  item: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem",
    background: "#fff3e0",
    marginBottom: "0.5rem",
    borderRadius: "8px",
  },
};
