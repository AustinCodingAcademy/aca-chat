const express = require('express');
const app = express();

let clientId = 0;
let port = 8080;
const bodyParser = require('body-parser');
app.use(express.static('public'));
app.use(bodyParser.json());

const messages = [
  {
    clientId: 0,
    text: "Welcome To Chat"
  }
];

app.post('/clients', (req, res)=> {
  clientId++;
  res.send(clientId.toString());
})

app.post('/messages', (req, res)=> {
  let body = req.body;
  messages.push(body);
  res.json(messages);
})

app.get('/messages', (req, res) => {
  res.json(messages);
})

app.listen(port, ()=> {
  console.log(`Web server is listening on port ${port}`);
})