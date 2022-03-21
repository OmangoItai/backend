const express = require("express");
const router = express.Router();

const fs = require("fs");
const path = require("path");

let spacePath = path.join(__dirname, "../../disk/");

function getAllFile(dir) {
  var list = { dir: {} };
  function traverse(res, dir) {
    fs.readdirSync(dir).forEach((file) => {
      const pathname = path.join(dir, file);
      if (fs.statSync(pathname).isDirectory()) {
        res.dir["file"] = {};
        traverse(res.dir, pathname);
      } else {
        res.dir.join(file);
      }
    });
  }
  traverse(list, dir);
  return list;
}

router.get("/list", (req, res) => {
  const folderPath = path.join(__dirname, "../../", req.query.dir);
  const list = {};
  list["dir"] = fs
    .readdirSync(folderPath, { withFileTypes: true })
    .filter((l) => l.isDirectory());
  list["file"] = fs
    .readdirSync(folderPath, { withFileTypes: true })
    .filter((l) => l.isFile());
  res.json(list);
});

module.exports = router;
