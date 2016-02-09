/**
 * Created by Ale on 2/8/16.
 */
var express = require('express');
var mysql = require('mysql');
var app = express();

var port = 8080;

app.get('/cast', function(res, req){
  connection.query("SELECT name FROM cast_table ORDER BY id ASC", function(err, result) {
    res.send(result);
  });
});

app.get('/attitude-chart/:type' , function(res,req){
  var type = req.params.type;
  connection.query("SELECT name FROM cast_table WHERE attitude = ?",type, function(err,result){
    res.send(result);
  });
})

app.listen(port, function(){
  console.log("Listening");
});

