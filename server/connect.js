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
  // create tables
  let createTodos = `create table if not exists todos(
                              id int primary key auto_increment,
                              name varchar(255)not null,
                              description varchar(255)not null,
                              has_bonus tinyint(1) not null default 0,
                              promo_code varchar(255)not null
                          )`;
  connection.query(createTodos, function (err, results, fields) {
    if (err) {
      console.log(err.message);
    } else {
      console.log('da');
    }
  });

  // insert new column
  let sql = `INSERT INTO todos(name,description,has_bonus,promo_code)
             VALUES('Mike','description', 1, 'secretcode')`;
  connection.query(sql);

  // let sql = `SELECT * FROM todos WHERE name="mike"`; // + mysql.escape(id);
  let sql = `SELECT * FROM todos`; // + mysql.escape(id);
  connection.query(sql, (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
    console.log(results);
  });

  //   //update
  //   let sql = `UPDATE todos SET name="Dan" WHERE name="Rares"`;
  //   connection.query(sql, (error, results, fields) => {
  //     if (error) {
  //       return console.error(error.message);
  //     }
  //     console.log(results);
  //   });

  connection.end(function (err) {
    if (err) {
      return console.log(err.message);
    }
  });
});
