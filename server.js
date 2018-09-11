var express = require("express");
// we require these three to run the program 
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
// assign a port that we will use
var PORT = process.env.PORT || 5000;
// this static is used for access to the css file
app.use(express.static(__dirname + "/app/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// these are the two files we use to transfer from html pages
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
// the program only works if the PORT is accessed
app.listen(PORT, function()
{
    console.log("App listening on PORT: " + PORT);
});