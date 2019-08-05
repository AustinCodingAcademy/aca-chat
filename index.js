const express = require("express");
//middleware for routes? maybe not needed here
const router = express.Router();
const app = express();

// .use() is for using middlewares with Express
// look for requested resource in /public folder and return it if found
// i.e. serve the webpage index.html from the public folder
app.use(express.static("public"));
// body-parser's json() method return middleware that will parse incoming req bodies into json
const bodyParser = require("body-parser");
app.use(bodyParser.json());

//what does this do?
const path = require("path");

//require the routes
let clientRoutes = require("./routes/clients");
let messageRoutes = require("./routes/messages");

app.use(clientRoutes);
app.use(messageRoutes);

app.listen(8080, err => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now listening for messages", err);
});

// as a fallback, return index.html
app.get("*", (req, res) => {
  // sends the file at the given path. .resolve() will try to combine the parameter strings into an absolute
  // path from left to right
  res.sendFile(path.resolve(__dirname, "../public", "index.html"));
});

///======================end of index==================

//===========original index.js logic before using routes and controller==========
// clientId holds the next id number for the next user as each user hits the page,
// clientId gets incremented. no 2 users should have the same clientId
//goes in client controller
// let clientId = 0;

// // messages holds all the messages posted by clients
// //goes in messages controller
// const messages = [
//   {
//     clientId: 0,
//     text: "Welcome To Chat"
//   }
// ];

// // the /clients route will return your unique client id
// // when the index.html onload runs, it requests the next client id
// app.post("/clients", (req, res) => {
//   clientId++;
//   res.send(clientId.toString());
// });

// // the /messages route will add the posted message { clientId: X, text: Y }
// // to the message array (above), and then return the whole list of messages
// app.post("/messages", (req, res) => {
//   let message = req.body;
//   messages.push(message);
//   res.json(messages);
// });

// // returns the whole list of messages
// app.get("/messages", (req, res) => {
//   res.json(messages);
// });
