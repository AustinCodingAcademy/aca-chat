// ## Server
// * write the boilerplate code for an express server using body-parser and serving static files from the /public folder, listening on port 8080
let express = require("express");
let bodyParser = require("body-parser");

let app = express();
app.use(bodyParser.json());
app.use(express.static("public"));


// * create a route for a post to `/clients`. In the callback, increment the clientId by one and `response.send(clientId.toString())`
app.post('/clients', (req, res) => {
  clientId++
  res.send(clientId.toString());
})

// * create a route for a post to `/messages`. In the callback, add the body to the messages array. `response.json(messages)`
app.post('/messages', (req,res) => {
  let body = req.body;
  messages.push(body);
  res.json(messages);
})

// * create a route for a get to `/messages`. In the callback, `response.json(message)`
app.get('/messages', (req, res)=> {
  res.json(message);
})



app.listen(8080, (err) => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now listening for messages on port");
 });

// * create a variable `clientId` and assign 0 to it
let clientId = 0;


const messages = [
  {
    clientId: 0,
    text: "Welcome To Chat"
  }
];
