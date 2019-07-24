const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));

let clientId = 0;


const messages = [
  {
    clientId: 0,
    text: "Welcome To Chat"
  }
];


app.post('/clients', (req, res)=> {
  clientId += 1;
  res.send(clientId.toString())
})

app.post('/messages', (req, res)=> {
  let message = req.body;
  messages.push(message);
  res.json(messages);
})

app.get('/messages', (req, res) => {
  res.json(messages)
})




app.listen(8080, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages on port");
});