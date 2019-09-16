let messages = [
    {
      clientId: 0,
      message: "Welcome To The Chat"
    }
];

exports.list = function list(req, res) {
    res.json(messages)
}

exports.create = function create(req, res) {
    console.log(req)
    let message = req.body;
    messages.push(message);
    res.json(messages)
}