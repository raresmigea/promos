var express = require('express');
var router = express.Router();

let mysql = require('mysql');
let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'todoapp',
});

// connect to the MySQL server
connection.connect(function (err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  let sql = `SELECT * FROM todos`;
  connection.query(sql, (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
    console.log(results);
    router.get('/', function (req, res, next) {
      res.send(results);
    });
  });
});

router.post('/', function (req, res) {
  console.log('req: ', req);
  console.log('res: ', res.body);
});

module.exports = router;
