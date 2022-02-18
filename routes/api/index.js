var express = require("express");
var router = express.Router();

router.use("/user", require("./user"));

router.use((req, res, next) => {
  if (req.session.username) next();
  res.redirect("/login");
});

router.use("/file", require("./file"));

module.exports = router;
