const express = require('express');
const router = express.Router();
const path = require('path');

router.use((req, res, next)=>{
    console.log(`Time: ${ Date.now() }`);
    next();
});


router.get('/', (req, res)=>{
    req.session.account = {
        name: 'elon',
        age:26
    };
    res.redirect('/page/home');
});

router.get('/home', (req, res)=>{
    res.render("index");
    // res.sendFile("public/build/index.html");
});


module.exports = router;