const express = require("express");
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

router.post("/", (req, res) => {
  if (userList.filter((user) => user.username == req.body.username).length) {
    res.send({ msg: "User already exist" });
  } else {
    res.send({ msg: "Reg success" });
  }
});

module.exports = router;
