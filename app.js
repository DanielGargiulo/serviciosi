var express = require("express");
var app = express();

app.set("view engine", "jade");

app.get("/", function(req, res){

	res.send("hola mundo");
});

app.listen(8080);