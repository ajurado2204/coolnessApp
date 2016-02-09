/**
 * Created by Ale on 2/8/16.
 */
var express = require('express');
var mysql = require('mysql');
var app = express();
var port = 8080;

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'coolnessdb'
});


connection.connect();

app.get('/cast', function(req, res){
  connection.query("SELECT id, name FROM cast_table ORDER BY id ASC", function(err, result) {
    res.send(result);
  });
});

app.get('/attitude-chart/:type' , function(req,res){
  var type = req.params.type;
  connection.query("SELECT name FROM cast_table WHERE attitude = ?",type, function(err,result){
    res.send(result);
  });
});

app.get("/coolness-chart",function(req, res){

  var query = "SELECT name,coolness_points FROM cast_table ORDER BY coolness_points DESC;";
  connection.query(query,function(err, rows, fields){

    if(err){
      res.status("404").send("No data.");
    }

    res.send(JSON.stringify(rows));

  });

});


app.listen(port, function(){
  console.log("Listening");
});

