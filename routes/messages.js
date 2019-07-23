const express = require("express");
const router = express.Router();
const {list, show, create} = require("../controllers/messages")

router.get("/clients", list);
router.get("/clients", show);
router.post("/clients", create);

module.exports = router;