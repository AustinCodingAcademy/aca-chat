var express = require('express')
var router = express.Router();
const{list, show, create} = require('../controllers/contacts')

let clientId = 0;

router.post('/', function(req,res){
    clientId += 1;
    res.send(clientId.toString());
})