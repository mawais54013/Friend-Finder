var path = require("path");
// this js file just reroutes the links to pages and exports them 

module.exports = function (app) {
    
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
        // survey.html
    });

    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
        // main page html
    });
};