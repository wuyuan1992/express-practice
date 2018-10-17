const express = require('express');
const router = express.Router();

const todo = new (require('../controllers/todo'));

router.use((req, res, next)=>{
    console.log(`Time: ${ Date.now() }`);
    next();
});


router.get('/', (req, res)=>{
    console.log(req.session.account);
    res.redirect('/todo/list');
});

router.get('/list', todo.getList);
router.get('/detail/:id', todo.getDetail);
router.get('/err', todo.tryErr);


module.exports = router;