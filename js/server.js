const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();
const PORT = 3000;

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "testdb",
});

db.connect((err) => {
    if (err) {
        console.error("Database connection error:", err);
        return;
    }
    console.log("Connected to the database");
});

app.use(bodyParser.json());

app.post("/register", (req, res) => {
    const { name, email, textarea } = req.body;

    if (!name || !email || !textarea) {
        return res.status(400).send("All fields are required.");
    }

    const query =
        "INSERT INTO users (name, email, textarea) VALUES (?, ?, ?)";
    db.query(query, [name, email, textarea], (err, result) => {
        if (err) {
            console.error("Error inserting data:", err);
            return res.status(500).send("Database error.");
        }
        res.status(200).send("User registered successfully!");
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
