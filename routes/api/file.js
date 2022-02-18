const express = require("express");
const router = express.Router();

router.get("/list", (req, res) => {
  res.json({
    listDir: [
      { name: "Fuckme video", path: "" },
      { name: "animals", path: "" },
    ],
    listFile: [
      { name: "f", path: "" },
      { name: "u", path: "" },
      { name: "3", path: "" },
    ],
  });
});

module.exports = router;
