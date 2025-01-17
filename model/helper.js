require("dotenv").config();
const mysql = require("mysql");



module.exports = async function db(query) {
  const results = {
    data: [],
    error: null
  };
  let promise = await new Promise((resolve, reject) => {
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

      con.query(query, function(err, result) {
        if (err) {
          results.error = err;
          console.log(err);
          reject(err);
          con.end();
          return;
        }

        if (!result.length) {
          if (result.affectedRows === 0) {
            results.error = "Action not complete";
            console.log(err);
            reject(err);
            con.end();
            return;
          }

          // push the result (which should be an OkPacket) to data
          // germinal - removed next line because it returns an array in an array when empty set
          // results.data.push(result);
        } else if (result[0].constructor.name == "RowDataPacket") {
          // push each row (RowDataPacket) to data
          result.forEach(row => results.data.push(row));
        } else if (result[0].constructor.name == "OkPacket") {
          // push the first item in result list to data (this accounts for situations
          // such as when the query ends with SELECT LAST_INSERT_ID() and returns an insertId)
          results.data.push(result[0]);
        }

        con.end();
        resolve(results);
      });
    });
  });

  return promise;
};
