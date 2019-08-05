const express = require("express");
const router = express.Router();

let clientId = 0;

router.post("/", function (req, res) {
    clientId = clientId + 1;
    res.send(clientId.toString());
})

module.exports = router;
