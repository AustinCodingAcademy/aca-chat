// let bodyParser = require("body-parser");
const messages = [
  {
    clientId: 0,
    text: "Welcome To Chat"
  }
];

exports.list = function list(req, res) {
  res.json(messages);
};

exports.create = function create(req, res) {
  console.log(req);
  let message = req.body;
  messages.push(message);
  res.json(message);
};

//==============original==================
// app.post("/messages", (req, res) => {
//     let message = req.body;
//     messages.push(message);
//     res.json(messages);
//   });

// returns the whole list of messages
// app.get("/messages", (req, res) => {
//     res.json(messages);
//   });
