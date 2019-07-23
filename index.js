let express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));
const thePort = 8080;
var clientRoutes = require('./routes/clients')
var messagesRoutes = require('./routes/messages')

let clientId = 0;


const messages = [
  {
    clientId: 0,
    text: "Welcome To Chat"
  }
];

app.listen(thePort, (err) => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now listening for messages on port",thePort);
 });

 app.use('/clients', clientRoutes)
 app.use('/messages',messagesRoutes)