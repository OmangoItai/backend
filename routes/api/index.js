var express = require("express");
var router = express.Router();

router.use("/user", require("./user"));

// router.use((req, res, next) => {
//   if (req.session.username) next();
//   else res.redirect("/login");
// });

router.use("/file", require("./file"));
router.use("/download", require("./download"));
router.use("/upload", require("./upload"));

module.exports = router;
