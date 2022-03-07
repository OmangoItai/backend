const express = require("express");
const router = express.Router();

const fs = require("fs");
const path = require("path");
let spacePath = path.join(__dirname, "../../space/");

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
  const list = {}
  list['dir'] = fs
    .readdirSync(folderPath, { withFileTypes: true })
    .filter((l) => (l.isDirectory()) );
  list['file'] = fs
      .readdirSync(folderPath, { withFileTypes: true })
      .filter((l) => (l.isFile()) );
  res.json(list);
});

router.get("/download", (req, res) => {
  const biaspath = req.body.path
  const filelist = req.body.filelist
  const dirlist = req.body.dirlist
  filelist.forEach(f => {
    res.set({
      'Content-Type': 'application/octet-stream',
      'Content-Disposition': 'attachment; filename=' + f,
      'responseType': 'arraybuffer',
    })
    console.log(path.join(spacePath,biaspath.substring(7,biaspath.length),f))
    res.download(path.join(spacePath,biaspath.substring(7,biaspath.length),f), f, (e) => {})
    if(e)
      console.log("寄了呢")
    else
      console.log("好了呢")
  })
});

module.exports = router;
