var express = require('express')
var router = express.Router();
const {list, create} = require("../controllers/messages")

router.post('/messages', create);

router.get('/messages', list);

module.exports = router;