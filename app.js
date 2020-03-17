var express 				= require("express");
var app						= express();
var bodyParser 				= require("body-parser");
var mongoose				= require("mongoose");

var indexRoutes 	= require("./routes/index");
var adminRoutes 	= require("./routes/admin");

var port = process.env.PORT || 3005;
var databaseUrl = process.env.DATABASEURL || "mongodb://localhost/maple-info";
mongoose.connect(databaseUrl);

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// ROUTES
app.use("/", indexRoutes);
app.use("/admin", adminRoutes);

app.get("*", function(req, res) {
	//req.flash("error", "Invalid route accessed.")
	res.redirect("back");
})

app.listen(port, function() {
	console.log("Server is running");
})