

let clientId = 0;


const messages = [
  {
    clientId: 0,
    text: "Welcome To Chat"
  }
];

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.listen(8080, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages", err);
});

//route for a post to /clients
app.post('/clients', (req, res) => {

})

//route for a post to messages
app.post('/messages', (req, res) => {

})

//route for a get to /messages
app.get('/messages', (req, res) => {

})