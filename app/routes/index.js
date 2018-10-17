const  pageRouter = require('./page');
const  todoApi = require('./todo');

const setRouter = (app)=>{
    app.get('/', (req, res)=>{ res.redirect('/page'); });

    app.use('/page', pageRouter);
    app.use('/todo', todoApi);

    return app;
}

module.exports = setRouter;