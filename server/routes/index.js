const express = require("express");
const router = express.Router();

router.get("/bobo", (req, res) => {
  res.end("We made it, to the mooon!!");
});

module.exports = router;
