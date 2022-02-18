const express = require("express");
const router = express.Router();

router.get("/list", (req, res) => {
  const randomString = () => Math.random().toString(36).substring(2);

  res.json({
    listDir: [
      { name: randomString(), path: "" },
      { name: randomString(), path: "" },
    ],
    listFile: [
      { name: randomString(), path: "" },
      { name: randomString(), path: "" },
      { name: randomString(), path: "" },
    ],
  });
});

module.exports = router;
