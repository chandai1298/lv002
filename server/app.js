const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');

app.use(bodyParser.json({type: 'application/json'}));
app.use(bodyParser.urlencoded({extended: true}));

var con = mysql.createConnection({
  host: '35.220.157.219',
  port: '3306',
  user: 'root',
  password: '12345', //empty for window
  database: 'learning',
});

var server = app.listen(1348, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('start');
});

con.connect(function (error) {
  if (error) console.log(error);
  else console.log('connected');
});

app.get('/getData', function (req, res) {
  con.query('select * from user', function (error, rows, fields) {
    if (error) console.log(error);
    else {
      console.log(rows);
      res.send(rows);
    }
  });
});

app.post('/sendData', function (req, res) {
  var query =
    "INSERT INTO user (username, email, password)  VALUES ('" +
    req.body.username +
    "', '" +
    req.body.email +
    "','" +
    req.body.password +
    "')";
  con.query(query, function (error, rows, fields) {
    if (error) console.log(error);
    else {
      // console.log(error);
      res.send(rows);
    }
  });
});
app.post('/checkLogin', function (req, res) {
  var user = req.body;
  //   var query = "CALL login ('" + user.username + "','" + user.password + "')";
  var query =
    "select * from user where username='" +
    user.username +
    "' and password='" +
    user.password +
    "'";
  con.query(query, [user.username, user.password], (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});
