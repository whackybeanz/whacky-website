var compression             = require("compression");
var express                 = require("express");
var app                     = express();
//var bodyParser              = require("body-parser");
var mongoose                = require("mongoose");
var flash                   = require("connect-flash");
var session                 = require("express-session");
var MongoStore              = require("connect-mongo");
var passport                = require("passport");
var LocalStrategy           = require("passport-local");
var passportLocalMongoose   = require("passport-local-mongoose");

var indexRoutes     = require("./routes/index");
var adminRoutes     = require("./routes/admin/adminIndex");
var cron            = require("./cron");

var User = require("./models/users");

var port = process.env.PORT;
var databaseUrl = process.env.DATABASEURL;
mongoose.connect(databaseUrl);

app.use(compression());
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(flash());
cron.runCron();

// PASSPORT CONFIG
app.use(session({
    secret: process.env.PASSPORT_SECRET,
    resave: false,
    saveUninitialized: false,
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

if(process.env.NODE_ENV === 'production') {
    app.use((req, res, next) => {
        if(req.header('x-forwarded-proto') !== 'https') {
            res.redirect(`https://${req.header('host')}${req.url}`)
        } else {
            next();
        }
    })
}

// ROUTES
app.use("/", indexRoutes)
    .use("/admin", adminRoutes);

app.get("*", function(req, res) {
    //req.flash("error", "Invalid route accessed.")
    res.redirect("/");
})

app.listen(port, function() {
    console.log("Server is running");
})