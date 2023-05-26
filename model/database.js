require("dotenv").config();
const mysql = require("mysql");
const fs = require("fs");

const DB_HOST = process.env.DB_HOST || "localhost";
const DB_USER = process.env.DB_USER  || "root";
const DB_PASS = process.env.DB_PASS || "root";
const DB_NAME = process.env.DB_NAME || "art";

const con = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  multipleStatements: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  //let sql = "DROP TABLE if exists movies; CREATE TABLE movies (id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT, title VARCHAR(40) NOT NULL, img VARCHAR(256) NOT NULL, year INTEGER NOT NULL);";
  let sql = fs.readFileSync(__dirname + "/init_db.sql").toString();

  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table creation `paintings` was successful!");

    console.log("Closing...");
  });

  con.end();
});
