const express = require("express");
const bookCntrl = require("../controllers/bookCntrl");
const router = express.Router();

router.get("/books", bookCntrl.get);
module.exports = router;
