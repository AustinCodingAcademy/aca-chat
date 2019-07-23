const express = require("express");
const bodyParser = require("body-parser");

let clientRoutes = require('./routes/clients');
let messageRoutes = require('./routes/messages');


const app = express();
app.use(bodyParser.json());

let clientId = 0;

const messages = [
    {
      clientId: 0,
      text: "Welcome To Chat"
    }
];

app.use(clientRoutes);
app.use(messageRoutes);


app.listen(8080, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages", err);
});
