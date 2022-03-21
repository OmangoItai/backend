const express = require("express");
const router = express.Router();

app.use("/download", require("./download"));
app.use("/api", require("./api"));

module.exports = router;
