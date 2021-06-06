let mysql = require('mysql');
let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'todoapp',
});

connection.connect(function (err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('evrika.');
});

connection.end(function (err) {
  if (err) {
    return console.log('error:' + err.message);
  }
  console.log('Close the database connection.');
});
