// Dependencies
var path = require("path");

// Export routes function
module.exports = function (app) {

    // Routes

    // Basic route that sends user to the homepage
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    // This route takes you to survey page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // Default route to homepage
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}