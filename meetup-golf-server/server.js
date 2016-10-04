var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var mongoose = require("mongoose");
var expressSession = require("express-session");

mongoose.connect("mongodb://localhost");    //Will change to db name on server we use 

var UserModel = require("./User")(mongoose);

var app = express();

var PORT = process.env.port || 3500;


app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

app.use(cors());
app.use(expressSession({
	secret: "nolayingup",
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

app.post("/", function(req, res) {
	res.send("success");
});

//User Signup/Login Routes
app.post("/signup", function(req, res) {
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
			console.log(userInfo, "User Data Is Here");
            var newUser = new UserModel(userInfo);
            newUser.save(function(err, data) {
                if (err) {
                    res.status(500);
                    res.send("Error creating user");
					console.log(err);
                    return;
                } else {
					req.session.user = data;
	                res.send({
						status: "success",
						userInfo: userInfo
					});
					console.log(data._id, " I have an ID");
				}
            });
        }
    });
});

app.post("/login", function(req, res) {
		UserModel.findOne({
			username: req.body.username,
		}, 
		function(err, data) {
			if (err) {
				console.log(err);
				res.status(500);
				res.send("Error logging in");
				return;
			} else { 
				//Need to handle error event of null, currently it's crashing server 
				data.comparePassword(req.body.password, function(err,isMatch){
					if (err) {
						res.send ({
						status: "error" 
						});
						console.log(req.body.password, isMatch);
					} else if (!isMatch) {
						res.send ({
							status: "error",
						});
						console.log("incorrect password");
					} else {
						console.log(data);
						req.session.user = data;
						delete req.session.user.password;
						delete data.password;
						res.send({
							status: "success",
							userInfo: data
						}); 
					}
				});
				
			}
		});
});

//Logout
app.post("/logout", function(req, res){
		console.log ("Logging out");
		console.log('username = ' + req.session.user);
		req.session.user = undefined;
		res.send("success");
		console.log('username = ' + req.session.user);
});

app.use(function(req, res, next) {
	res.status(404);
	res.send("no");
});

app.listen(PORT, function() {
	console.log("Tee off on Port " + PORT);
});