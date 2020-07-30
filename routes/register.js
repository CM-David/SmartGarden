const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../models')

// body-parser

// database link to express

//Render to register.ejs
router.get('/register', (req, res) => {

    res.render('register')
})

//Capture username, password, email from register.ejs 
router.post('/register', (req, res) => {

    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;

    let passwordEncrypted = bcrypt.hashSync(password, 8);

    db.users.create({
        username: username,
        email: email,
        password: passwordEncrypted,
        roleID: 1 //I need to change and match roleID to table attribute
    })

    .then(user => {
        res.redirect('/login');
    })
    .catch(error => {
        res.redirect('/404')
    })
   
})

module.exports = router;
