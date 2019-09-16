const Message = require("../models/messages");

let messages = [
    {
      clientId: 0,
      message: "Welcome To The Chat"
    }
];

// exports.list = function list(req, res) {
//     res.json(messages)
// }

exports.list = function list(req, res) {
    Message.find((err, v)=>{
        return res.json(v);
    });
    res.json(messages)
}

exports.create = function create(req, res) {
    console.log(req)
    let message = {message: req.body.message};
    messages.push(message);
    res.json(messages)
    let newMessage = new Message(message);
    newMessage.save();
}