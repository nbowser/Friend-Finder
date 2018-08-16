// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Allows Express to serve static files
app.use(express.static("app/public"));

// Routes files for API and HTML
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});