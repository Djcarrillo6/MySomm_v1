const express = require("express");
const router = express.Router();

router.get("/mysomm-join-chat", (req, res) => {
    res.send('Welcome to ChatRoom');
});

module.exports = router;