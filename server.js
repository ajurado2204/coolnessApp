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


connection.connect();
app.get("/coolness-chart",function(req, res){

  var query = "SELECT name,coolness_points FROM cast_table ORDER BY coolness_points DESC;";
  connection.query(query,function(err, rows, fields){

    if(err){
      res.status("404").send("No data.");
    }

    var obj = {};
    for(var i = 0; i < rows.length; i++){

      obj.i = {name:rows[i].name,coolness_points:rows[i].coolness_points};
    }

    res.send(JSON.stringify(obj));

  });

});


app.listen(port, function(){
  console.log("Listening");
});
