# Express_Note_Taker
[![Generic badge](https://img.shields.io/badge/License-MIT-blue.svg)](https://shields.io/)

## Project Description: 
The Express Note Taker application is an application that can be used to write, save, and delete notes. This application uses an express backend and saves and retrieves note data from a JSON file.

* The following HTML routes were created and are should be fully functioning.

  * GET `/notes` - Should return the `notes.html` file.

  * GET `*` - Should return the `index.html` file

* The application should have a `db.json` file on the backend that will be used to store and retrieve notes using the `fs` module.

* The following API routes should be created:

  * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

  * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

  * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Test](#test)
  * [Credits](#credits)
  * [License](#license)
  * [Questions](#questions)
     
## Installation
* Clone the repository.
* Open server.js and run `npm install` to install dependencies

## Usage
* Using a CLI run `node server.js` to initiate server.
* Go to your default browser and go to localhost:3000
* For deployed site, please visit https://serene-earth-46346.herokuapp.com/

## Test
* Using a CLI run `npm test`

## Credits
Sole Contributor

## License
This project is licensed under the MIT License.

## Questions
  * Github: https://github.com/star-gibson
  * Please feel free to reach out to me on Github (above) or send an email to sgibsoncoding@gmail.com if you have any questions about my application!