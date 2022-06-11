const express = require("express");
const defaultCntrl = require("./../controllers/defaultCntrl");
const router = express.Router();

router.get("/", defaultCntrl.get);
router.get("/health", defaultCntrl.health);
module.exports = router;
