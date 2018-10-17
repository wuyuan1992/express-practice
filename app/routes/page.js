const express = require('express');
const router = express.Router();

router.use((req, res, next)=>{
    console.log(`Time: ${ Date.now() }`);
    next();
});


router.get('/', (req, res)=>{
    res.redirect('/page/home');
});

router.get('/home', (req, res)=>{
    req.session.account = {
        name: 'elon',
        age:26
    }
    res.end();
    // res.sendFile('public/react-app/index.html');
});


module.exports = router;