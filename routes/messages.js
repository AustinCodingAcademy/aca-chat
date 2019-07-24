var express = require('express')
var router = express.Router();

var messages = [
  {
    clientId: 0,
    message: "Welcome To Chat"
  }
];

router.post('/messages', (req,res)=>{
    console.log(req);
    let message = req.body;
    messages.push(message);
    res.send(messages)
})

router.get('/messages', (req,res)=>{
    res.send(messages);
})

module.exports = router;