var express = require("express");
var router = express.Router();

/* GET home page. */
router.use("/api", require("./api"));

module.exports = router;
