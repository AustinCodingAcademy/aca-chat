let messages = require("../index");

exports.list = function list(req, res) {
    res.json(messages)
}

exports.create = function create(req, res) {
    text = req.body;
    messages.push(text);
    res.json(text)
}