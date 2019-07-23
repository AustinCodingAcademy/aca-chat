const express = require("express");
const router = express.Router();
const {create} = require("../controllers/clients")

router.post("/clients", create);

module.exports = router;