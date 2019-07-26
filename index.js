const express= require('express');
const bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.json());
app.use(express.static('public'))

let clientId = 0;

const messages = [
  {
    clientId: 0,
    text: "Welcome To Chat, Have Fun!"
  }
];
app.get('/messages',(req,res)=>{
  res.json(messages)
});
app.post('/clients', (req,res)=>{
  clientId += 1 
  res.send(clientId.toString())
});
app.post('/messages',(req,res)=>{
  let newMessage =req.body
  messages.push(newMessage)
  res.json(messages)
});

app.listen(8080,console.log("Server is litening on port 8080"))