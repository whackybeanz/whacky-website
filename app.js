var express 				= require("express");
var app						= express();
var bodyParser 				= require("body-parser");
var mongoose				= require("mongoose");

var indexRoutes 	= require("./routes/index");
var mapleRoutes 	= require("./routes/mapleIndex");
var extrasRoutes 	= require("./routes/extrasIndex");
var beginnerRoutes 	= require("./routes/beginnerGuide");
var adminRoutes 	= require("./routes/admin");

var port = process.env.PORT || 3005;
var databaseUrl = process.env.DATABASEURL || "mongodb://localhost/maple-info";
mongoose.connect(databaseUrl, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use('/public', express.static(__dirname + '/public'));

// MIDDLEWARE
app.use(function(req, res, next) {
	res.locals.url = req.originalUrl;
	next();
})

// ROUTES
app.use("/", indexRoutes);
app.use("/maple", mapleRoutes);
app.use("/maple/extras", extrasRoutes);
app.use("/maple/newbies", beginnerRoutes);
app.use("/admin", adminRoutes);

app.get("*", function(req, res) {
	//req.flash("error", "Invalid route accessed.")
	res.redirect("back");
})

app.listen(port, function() {
	console.log("Server is running");
})