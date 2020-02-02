const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const port = process.env.PORT || 8080;
const bodyParser = require("body-parser");
// const chatLog = require('./chatLog')

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

let clientId = 0;

app.post('/clients', (req, res) => {
  clientId += 1;
  res.send(clientId.toString());
  // console.log(req)
})

app.get('/messages', (req, res) => {
    // console.log(req.body)
  res.json(messages)
})

app.post('/messages', (req, res) => {
  console.log(req.body)
  messages.push({
    "clientId": req.body.clientId,
    "text": req.body.message
  })
  res.json(messages)
  // console.log(messages)
})



const messages = [
  {
    "clientId": clientId,
    text: "Welcome To Chat"
  }
];


app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});