var express                 = require("express");
var app                     = express();
var bodyParser              = require("body-parser");
var mongoose                = require("mongoose");
var flash                   = require("connect-flash");
var session                 = require("express-session");
var MongoStore              = require("connect-mongo");
var passport                = require("passport");
var passportLocalMongoose   = require("passport-local-mongoose");

var indexRoutes     = require("./routes/index");
var mapleRoutes     = require("./routes/mapleIndex");
var extrasRoutes    = require("./routes/extrasIndex");
var beginnerRoutes  = require("./routes/beginnerGuide");
var adminRoutes     = require("./routes/admin");

var port = process.env.PORT || 3005;
var databaseUrl = process.env.DATABASEURL || "mongodb://localhost/maple-info";
mongoose.connect(databaseUrl, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static('public'));

// PASSPORT CONFIG
app.use(session({
    secret: "whacky's website for maple stuff",
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongoUrl: databaseUrl })
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// MIDDLEWARE
app.use(function(req, res, next) {
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
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