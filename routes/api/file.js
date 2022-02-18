const express = require("express");
const router = express.Router();

const fs = require("fs");
const path = require("path");

router.get("/list", (req, res) => {
  const folderPath = path.join(__dirname, "../../space", req.session.username);

  const list = fs
    .readdirSync(folderPath, { withFileTypes: true })
    .map((l) => (l.isDirectory() ? { ...l, name: l.name + "/" } : l));
  res.json(list);
});

module.exports = router;
