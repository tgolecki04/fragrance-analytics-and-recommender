const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());

// 🔹 POŁĄCZENIE Z MYSQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Project2025_data",
  database: "project"
});

db.connect(err => {
  if (err) {
    console.error("Błąd połączenia:", err);
    return;
  }
  console.log("Połączono z MySQL");
});

// 🔹 ENDPOINT AUTOCOMPLETE
app.get("/autocomplete", (req, res) => {
  const q = req.query.q;

  if (!q || q.length < 2) {
    return res.json([]);
  }

  const sql = `
    SELECT Perfume
    FROM fragrances
    WHERE lower(Perfume) LIKE ?
    LIMIT 5;
  `;

  db.query(sql, [q + "%"], (err, results) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(results.map(r => r.Perfume));
  });
});

// 🔹 START SERWERA
app.listen(3000, () => {
  console.log("Serwer działa na http://localhost:3000");
});
