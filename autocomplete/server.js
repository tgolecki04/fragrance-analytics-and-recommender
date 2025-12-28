const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

// 🔹 AUTOCOMPLETE
app.get("/autocomplete", (req, res) => {
  const q = req.query.q;

  if (!q || q.length < 2) {
    return res.json([]);
  }

  const sql = `
    SELECT DISTINCT Perfume, address_img
    FROM men_fragrances
    WHERE LOWER(Perfume) LIKE ?
    LIMIT 5;
  `;

   db.query(sql, [q.toLowerCase() + "%"], (err, results) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(results);
  });
});

// 🔹 ZAPIS Z FORMULARZA
app.post("/save", (req, res) => {
  console.log("REQ.BODY:", req.body); // 🔍 DEBUG

  const {
    input_1,
    input_2,
    input_3,
    input_4,
    input_5,
    input_6
  } = req.body;

  const sql = `
    INSERT INTO app_data
    (input_1, input_2, input_3, input_4, input_5, input_6)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [input_1, input_2, input_3, input_4, input_5, input_6],
    (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Błąd zapisu");
      }
      res.send("Zapisano poprawnie");
    }
  );
});

// POINFORMOWANIE UŻYTKOWNIKA
const { execFile } = require("child_process");

app.get("/random", (req, res) => {
  // 1️⃣ pobranie ostatniego wiersza z tabeli
  const sql = `
    SELECT input_1, input_2, input_3, input_4, input_5, input_6
    FROM app_data
    ORDER BY id_app DESC
    LIMIT 1
  `;

  db.query(sql, (err, results) => {
    if (err) return res.status(500).send("Błąd bazy");

    if (results.length === 0) return res.status(404).send("Brak danych");

    // 2️⃣ zamiana wiersza na listę wartości
    const row = Object.values(results[0]);

    // 3️⃣ uruchomienie Pythona
    const pythonProcess = execFile(
      "python", 
      ["C:/Users/Tomasz04/Desktop/Workspace/IT/ml_project/python/app.py"], 
      { input: JSON.stringify(row) }, // przekazanie wiersza jako stdin
      (error, stdout, stderr) => {
        if (error) {
          console.error(error);
          return res.status(500).send("Błąd Pythona");
        }
        if (stderr) console.error(stderr);

        // 4️⃣ zwrócenie wylosowanej wartości
        res.send(stdout.trim());
      }
    );

    // przekazanie danych do Pythona przez stdin
    pythonProcess.stdin.write(JSON.stringify(row));
    pythonProcess.stdin.end();
  });
});

app.listen(3000, () => {
  console.log("Serwer działa na http://localhost:3000");
});
