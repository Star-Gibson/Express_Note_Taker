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

//Basic Routes
//Basic route - sends user to index page
app.get("*", function(req, res){
    res.sendFile(path.join(__dirname, "public/index.html"));
});

//Basic route - sends user to notes page
app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "public/notes.html"));
});

//API Routes
//GET /api/notes - should read db.json
app.get("/api/notes", function(req, res){
    fs.readFile(path.join(__dirname, "db/db.json"))
})

//POST - /api/notes -> req.body -> db.json

//DELETE - /api/notes/:id -> query.param (containing ID) -> read db.json -> rewrite db.json



//Listener
app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});