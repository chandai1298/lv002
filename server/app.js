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
// Information APP
//du lieu Home
app.get('/getDataApp_Home', function (req, res) {
  con.query('select * from category', function (error, rows, fields) {
    if (error) console.log(error);
    else {
      console.log(rows);
      res.send(rows);
    }
  });
});
// du lieu config
app.post('/getConfig', function (req, res) {
  var user = req.body;
  var query =
    "select * from overview where id_user='" +
    user.id_user +
    "' and type='" +
    user.type +
    "'";
  con.query(query, [user.id_user, user.type], (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});
app.get('/getEvaluation', function (req, res) {
  var query =
    'select q.id_title,q.question,q.detail_question,q.answer,t.title,q.image,q.sound\
  from question as q,lession as l,category as c,title as t\
  WHERE c.id=l.id_category and l.id=q.id_lession and c.id=5 and t.id=q.id_title';
  con.query(query, (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});

// Information USER
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
      res.send(rows);
    }
  });
});

app.post('/checkLogin', function (req, res) {
  var user = req.body;
  //   var query = "CALL login ('" + user.username + "','" + user.password + "')";
  var query = "select * from user where username='" + user.username + "'";
  con.query(query, [user.username], (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});
