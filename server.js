//Dependencies
//Require Express
var express = require("express");
//Require Path
var path = require("path");
//Require File System
var fs = require("fs");

//Sets up the Express App
var app = express();
var PORT = 3000;

//Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
//Sets up Express to serve static files
app.use(express.static("public"));

//Routes
//Basic route - sends user to index page
app.get("/", function(req, res){
    res.sendFile(path.join(_dirname, "public/index.html"));
});
//Basic route - sends user to notes page



//Listener
app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});