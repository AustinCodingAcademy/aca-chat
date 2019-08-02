var express = require('express')
var router = express.Router();


let clientId = 0;

router.post('/', (req,res)=>{
    clientId += 1;
    res.send(clientId.toString());
})

module.exports = router;