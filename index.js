let express = require("express");

const bodyParser = require("body-parser");
const thePort = 8080;
const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));


//clients

let clientId = 0;

app.get('/clients', (req, res)=>{
  res.json(clients)
})

 app.post('/clients', (req, res) => {
  clientId =+ 1;
  res.send(clientId.toString());
})


//messages

app.get('/messages', (req, res)=>{
  res.json(messages)
})

app.post('/messages', (req, res) => {
  let message = req.body;
  messages.push(message);
  res.json(message);
})

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