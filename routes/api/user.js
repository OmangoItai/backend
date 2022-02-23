const express = require("express");
const req = require("express/lib/request");
const path = require("path")
const fs = require("fs");
const router = express.Router();
let pathUserList = path.resolve(__dirname,"../../account/UserList.json")

const userList = JSON.parse(fs.readFileSync(pathUserList,(err,data) =>{
  if(err)
    throw "Loading UserList.json wrong."
}))

router.get("/login", (req, res) => {
  res.json({ username: req.session.username });
});

router.post("/login", (req, res) => {
  if (
    userList["data"].filter(
      (user) =>
        user.username === req.body.username && user.password === req.body.password
    ).length === 1
  ) {
    req.session.username = req.body.username;
    res.redirect("/space");
  } else {
    if(userList["data"].filter(
        (user) => user.username === req.body.username).length === 0
    )
      res.status(401).json({ msg: "User is not exist." });
    else
      res.status(401).json({msg: "Wrong password."})
  }
});

router.get("/logout", (req, res) => {
  req.session.username = "";
  res.end();
});

router.post("/register", (req, res) => {
  if (userList["data"].filter((user) => user.username === req.body.username).length) {
    res.json({ msg: "User already exist." });
  } else {
    userList["data"].push({ "username": req.body.username, "password": req.body.password , "authority": "member"});
    try {fs.writeFileSync(pathUserList,JSON.stringify(userList))}
    catch(err){
      res.status(500).json({msg: "Register failed on server."})
      console.log(err)
      return
    }
      res.json({msg: "Register success."})
  }
});

module.exports = router;
