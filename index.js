const express = require("express");
const bodyParser= require("body-parser");
const thePort = 8080;
let clientId = 0;

let app = express();
app.use(bodyParser.json());
app.use(express.static("public"));

app.listen(thePort, (err)=>{
  if(err){
    return console.log("Error", err);
  }
  console.log('Server is running on port',thePort);
});

//clients and messages
//post clientes route
app.post('./clients',(request, response)=>{
  messages.clientId += 1;
  response.send(clientId.toString());
})
//post messages route
//get messages route

const messages = [
  {
    clientId: 0,
    text: "Welcome To Chat"
  }
];