const express = require("express");
const router = express.Router();

const fs = require("fs");
const path = require("path");
let spacePath = path.join(__dirname, "../../space/");

function getAllFile(dir){
  var list= {dir:{}}
  function traverse(res,dir){
    fs.readdirSync(dir).forEach((file)=>{
      const pathname=path.join(dir,file)
      if(fs.statSync(pathname).isDirectory()){
        res.dir["file"] = {}
        traverse(res.dir,pathname)
      }else{
        res.dir.join(file)
      }
    })
  }
  traverse(list,dir)
  return list;
}

router.get("/list", (req, res) => {
  const list = fs
    .readdirSync(spacePath, { withFileTypes: true })
    .map((l) => (l.isDirectory() ? { ...l, name: l.name + "/" } : l));
  res.json(list);

});

router.post("/download", (req,res) => {
  const list = req.body.downloadlist
  for (file in list["file"])
    res.download(path.join(spacePath,file))
  // for(dir in list["dir"])
  //   for(file in getAllFile(dir))
  //     res.download
})


module.exports = router;
