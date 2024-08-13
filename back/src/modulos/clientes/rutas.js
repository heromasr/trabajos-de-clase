const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("cliente ok")
});

module.exports = router;