var express = require("express");
var router = express.Router();

router.use("/file", require("./file"));

module.exports = router;
