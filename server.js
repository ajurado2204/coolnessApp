/**
 * Created by Ale on 2/8/16.
 */
var express = require('express');
var mysql = require('mysql');
var app = express();
var port = 8080;

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});


app.listen(port, function(){
  console.log("Listening");
});
