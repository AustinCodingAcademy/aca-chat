const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8080;
const bodyParser = require("body-parser");
const chatLog = require('./chatLog')

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

const messages = [
  {
    clientId: 0,
    text: "Welcome To Chat"
  }
];

clientId = 0;

app.post('/clients', (req, res) => {
  clientId += 1;
  res.send(clientId.toString());
  console.log(req.body);
})

app.get('/messages', (req, res) => {
  res.json(messages)
})

app.post('/messages', (req, res) => {
  chatLog.push({
    "cliendId" : cliendId,
    "text" : req.body.message
  })
  res.json(messages)
})

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
 });