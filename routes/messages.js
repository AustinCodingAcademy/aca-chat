var express = require('express')
var router = express.Router();

var messages = [
    {
      clientId: 0,
      text: "Welcome To Chat"
    }
  ];


router.post('/', (req,res)=>{
    console.log(req);
    let message = req.body;
    messages.push(message);
    res.json(messages)
})

router.get('/', (req,res)=>{
    res.json(messages);
})

module.exports = router;