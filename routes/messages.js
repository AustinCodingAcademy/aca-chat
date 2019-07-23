const express = require("express");
const router = express.Router();
const {list, create} = require("../controllers/messages")

router.get("/clients", list);
router.post("/clients", create);

module.exports = router;