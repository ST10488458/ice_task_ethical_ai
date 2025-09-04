// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to the Book App</h1>
      <h2 style={styles.subheading}>Your number 1 shop for all things books at MSA</h2>
    </div>
  );
}

function Books() {
  return (
    <div style={styles.container}>
      <p style={styles.text}>Page is coming soon!</p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/books" style={styles.link}>Books</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </Router>
  );
}

const styles = {
  container: {
    padding: "2rem",
    textAlign: "center",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "0.5rem",
  },
  subheading: {
    fontSize: "1.25rem",
    marginBottom: "1rem",
  },
  text: {
    fontSize: "1rem",
  },
  nav: {
    display: "flex",
    gap: "1rem",
    padding: "1rem",
    borderBottom: "1px solid #ccc",
    justifyContent: "center",
  },
  link: {
    textDecoration: "none",
    color: "blue",
  },
};
