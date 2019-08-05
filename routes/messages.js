const express = require("express");
//middleware for routes setup
const router = express.Router();

const { list, create } = require("../controllers/messages");

router.post("/messages", create);
router.get("/messages", list);

module.exports = router;
