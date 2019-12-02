const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
dotenv.config();

let clientRoutes = require('./routes/clients');
let messageRoutes = require('./routes/messages');

const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));

app.use(clientRoutes);
app.use(messageRoutes);

const mongoose = require('mongoose');
mongoose.connect(process.env.mongodburi, {useNewUrlParser: true});

const port = process.env.PORT || 8080;
app.listen(port, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages", err);
});
