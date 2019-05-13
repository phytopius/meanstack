const express = require('express');
const mysql = require('mysql');
const router = express.Router();

var mysqlConnection = mysql.createConnection({
  host:'localhost',
  user: "root",
  password: "example",
  database: "test"
});

mysqlConnection.connect((err) => {
  if (!err)
    console.log('DB Connection succeeded.');
  else
    console.log('DB connection failed: ' + JSON.stringify(err));
})


router.get('/', (req, res) => {
    res.send('api works');
});

router.get('/employee', (req, res) => {
  mysqlConnection.query('SELECT * FROM employee', (err, rows, fields) =>{
    if (!err)
      res.send(rows);
    else
      console.log(err);
  });
});

module.exports = router;