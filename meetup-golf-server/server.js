var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var mongoose = require("mongoose");
var expressSession = require("express-session");

mongoose.connect("mongodb://localhost");    //Will change to db name on server we use 

var UserModel = require("./User")(mongoose);

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

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/index.html");
});

app.post("/api", function(req, res) {
	res.send("success");
});

//User Signup/Login Routes
app.post("/api/signup", function(req, res) {
    UserModel.findOne({
        username: req.body.username
    }, function(err, data) {
        if (err) {
            res.status(500);
            res.send("Error checking username");
            return;
        }
        if (data) {
            res.send({
                status: "error",
                message: "Username already taken"
            });
        } else {
            var userInfo = {
                username: req.body.username,
				email: req.body.email,
				password: req.body.password,
            };
            var newUser = new UserModel(userInfo);
            newUser.save(function(err) {
                if (err) {
                    res.status(500);
                    res.send("Error creating user");
                    return;
                } 
                res.send({
                    status: "success",
                    userInfo: userInfo
                });
            });
        }
    });
});

app.post("/api/login", function(req, res) {
	UserModel.findOne({
		username: req.body.username,
		password: req.body.password
	}, function(err, data) {
		if (err) {
			res.status(500);
			res.send("Error logging in");
			return;
		}
		if (data) {
			res.send ({
				status: "error"
			});
		} else {
			res.send({
				status: "success",
				userInfo: data
			});
		}
	});
});

app.use(function(req, res, next) {
	res.status(404);
	res.send("no");
});

app.listen(PORT, function() {
	console.log("Tee off on Port " + PORT);
});