require("dotenv").config();
const express = require('express');

const app = express();

const PORT = process.env.PORT


// link to public folder
app.use(express.static('public'));

// link to views folder
app.set('view engine', 'ejs');

// create routes
app.use(require('./routes/index'))



// Start Server

let server = app.listen(PORT, () => {
    console.log('Listening on port 3000');
})
