const express = require('express');
const router = express.Router();

// body-parser

// database link to express


router.get('/login', (req, res) => {

    res.render('login')
})


module.exports = router;