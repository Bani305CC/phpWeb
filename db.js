// db.js
const mysql = require("mysql2");
const { stack } = require("./routes/userRoutes");

// Database connection details
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  port: "3306",
  database: "dbemployee",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Connected to the database.");
});

module.exports = db;

