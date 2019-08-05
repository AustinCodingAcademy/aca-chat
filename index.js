const express = require("express")
const clientRoutes = require("./clients")
const messageRoutes = require("./messages")
const bodyParser = require("body-parser");
const app = express();
const thePort = 8080;
app.use(bodyParser.json());
app.use(express.static("public"));
app.use('/clients', clientRoutes)
app.use('/messages', messageRoutes)


app.listen(thePort, err => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now listening for messages on port", thePort);
});
