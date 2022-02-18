const express = require("express");
const router = express.Router();

const fs = require("fs");
const path = require("path");

router.get("/list", (req, res) => {
  const folderPath = path.join(__dirname, "../../space", req.session.username);

  const list = fs.readdirSync(folderPath, { withFileTypes: true });
  const listFile = list.filter((l) => l.isFile());
  const listDir = list.filter((l) => l.isDirectory());
  res.json({ listDir, listFile });
});

module.exports = router;
