const express = require("express");
const req = require("express/lib/request");
const router = express.Router();

const userList = [
  {
    username: "Snowsore",
    password: "123",
  },
  {
    username: "Rend",
    password: "123",
  },
];

router.get("/logout", (req, res) => {
  req.session.username = "";
  res.end();
});

router.post("/login", (req, res) => {
  if (
    userList.filter(
      (user) =>
        user.username == req.body.username && user.password == req.body.password
    ).length
  ) {
    req.session.username = req.body.username;
    res.redirect("/space");
  } else {
    res.status(401).json({ msg: "Wrong login" });
  }
});

router.post("/register", (req, res) => {
  if (userList.filter((user) => user.username == req.body.username).length) {
    userList.push({ username: req.body.username, password: req.body.password });
    res.json({ msg: "User already exist" });
  } else {
    res.json({ msg: "Reg success" });
  }
});

module.exports = router;
