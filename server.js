//Dependencies
//Require Express
var express = require("express");
//Require Path
var path = require("path");
//Require File System
var fs = require("fs");
//Require DataBase
var db = require("./db/db.json");

//Sets up the Express App
var app = express();
//Heroku PORT or default to PORT 3000
var PORT = process.env.PORT || 3000; 

//Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
//Sets up Express to serve static files
app.use(express.static("public"));

//Basic Routes
//Basic route - sends to notes page
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

//GET /api/notes - should read db.json and return notes as JSON 
app.get("/api/notes", (req, res) => {
 res.json(db);
});

//Basic route - Catch all Route
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

//API Routes 
//POST - /api/notes -> req.body -> db.json
app.post("/api/notes", (req, res) => {
    //Gives ID's to each note.    
    const notes = {
        id: db.length + 1,
        title: req.body.title,
        text: req.body.text
      };   
    //Takes user input and puts into Database
    db.push(notes);
    fs.writeFile("./db/db.json", JSON.stringify(db),function (err) {
        if (err) {
          console.log("err"); // "console.log(err)"
          res.sendStatus(404);
        } 
        else {
            res.sendStatus(200); 
            console.log("Success") //console.log("Success")
        }
      });  
      console.log(db); //Check to see db.json array
      console.log(notes); //Check to see if ID is given.
      
})


//DELETE - /api/notes/:id -> query.param (containing ID) -> read db.json -> rewrite db.json
app.delete("api/notes/:id", function(req, res){

})



//Listener
app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});