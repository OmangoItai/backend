var express = require("express");
var router = express.Router();

router.use("/file", require("./file"));
router.use("/register", require("./register"));

module.exports = router;
