let messages = require("../messages");

exports.list = function list(req, res) {
    res.json(messages)
}

// exports.show = function show(req, res) {
//     let message = messages.filter(p=>p._id == req.params.idNum);
//     res.json(message)
// }

exports.create = function create(req, res) {
    let newMessage = req.body;
    messages.push(newMessage);
    res.json(newMessage)
}