const express = require("express");
const req = require("express/lib/request");
const router = express.Router();

const userList = fs.readFileSync('../../account/UserList.json.json')

router.get("/login", (req, res) => {
  res.json({ username: req.session.username });
});

router.post("/login", (req, res) => {
  if (
    userList.filter(
      (user) =>
        user.username == req.body.username && user.password == req.body.password
    ).length == 1
  ) {
    req.session.username = req.body.username;
    res.redirect("/space");
  } else {
    if(userList.filter(
        (user) => user.username == req.body.username).length == 0
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
  if (userList.filter((user) => user.username == req.body.username).length) {
    res.json({ msg: "User already exist" });
  } else {
    userList.push({ username: req.body.username, password: req.body.password });
    res.json({ msg: "Reg success" });
  }
});

module.exports = router;
