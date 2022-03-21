const express = require("express");
const router = express.Router();

const path = require("path");

const zipFolder = require("zip-folder");

router.post("/", (req, res) => {
  const type = req.body.type;
  if (type === "dir") {
    const dir = req.body.path.split("/").pop();
    const cource = path.join(APPROOT, req.body.path);
    const target = path.join(APPROOT, "public", `${dir}.zip`);
    zipFolder(cource, target, (err) => {
      if (err) return console.error(err);

      res.sendFile(target);
    });
  } else {
    res.sendFile(path.join(APPROOT, req.body.path));
  }
});

module.exports = router;
