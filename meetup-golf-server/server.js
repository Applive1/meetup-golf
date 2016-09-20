var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var mongoose = require("mongoose");
var expressSession = require("express-session");

mongoose.connect("mongodb://localhost");    //Will change to db name on server we use 

var app = express();

var PORT = process.env.port || 3500;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(cors());
app.use(expressSession({
	secret: require("./secret.js"),
	resave: false,
	saveUninitialized: false
}));

app.use(function(req, res, next) {
	console.log(req.url);
	next();
});

app.use(function(req, res, next) {
	res.status(404);
	res.send("no");
});

app.listen(PORT, function() {
	console.log("Tee off on Port " + PORT);
});