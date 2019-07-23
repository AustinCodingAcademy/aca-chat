var express = require('express')
var router = express.Router();
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

const messages = [
    {
      clientId: 0,
      text: "Welcome To Chat"
    }
  ];


router.post('/', function(req,res){
    messages.text = req.body;
    res.json(messages)
})

router.get('/', function(req,res){
    res.json(messages);
})