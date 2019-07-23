const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const thePort = 8080;

app.use(bodyParser.json());
app.listen(thePort, (err) => {
  err ? console.log('Error:' + err) : app.use(express.static('public'));
  console.log(`The web server is now working on port ${thePort}`);
});

let clientId = 0;

const messages = [
  {
    clientId: 0,
    text: "Welcome To Chat"
  }
];

app.post('/clients', (req, res) => {
  clientId += 1;
  res.send(clientId.toString());
});

app.post('/messages', (req, res) => {
  let message = req.body;
  messages.push(res.json(message));
});

app.get('/messages', (req, res) => {
  res.json(messages);
});