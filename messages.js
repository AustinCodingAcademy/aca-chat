const express = require('express');
const router = express.Router();

const messages = [
    {
        clientId: 0,
        text: "Welcome To Chat"
    }
];

router.post("/", function (req, res) {
    let message = req.body;
    messages.push(message);
    res.json(messages)
})

router.get("/", function (req, res) {
    res.json(messages)
})

module.exports = router;
