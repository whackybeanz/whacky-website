var express 				= require("express");
var app						= express();
var bodyParser 				= require("body-parser");

var indexRoutes 	= require("./routes/index");

var port = process.env.PORT || 3005;
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// ROUTES
app.use("/", indexRoutes);

app.get("*", function(req, res) {
	//req.flash("error", "Invalid route accessed.")
	res.redirect("back");
})

app.listen(port, function() {
	console.log("Server is running");
})