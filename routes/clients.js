const express = require("express");
//middleware for routes setup
const router = express.Router();

//function logic is in controller
//declare variable and require path where the logic/requests are found
const { create } = require("../controllers/clients");

router.post("/clients", create);

module.exports = router;
