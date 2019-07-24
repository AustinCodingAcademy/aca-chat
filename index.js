let express = require("express");
var clientRoutes = require('./routes/clients')
var messagesRoutes = require('./routes/messages')
const app = express();
const thePort = 8080;
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.static("public"));
app.use('/clients', clientRoutes)
app.use('/messages',messagesRoutes)


app.listen(thePort, (err) => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now listening for messages on port",thePort);
 });

