const express = require("express");
const router = express.Router();

const path = require("path");

router.post("/", (req, res) => {
  const file = req.files.file;
  file.mv(path.join(APPROOT, req.body.path, file.name));
  res.end();
});

module.exports = router;
