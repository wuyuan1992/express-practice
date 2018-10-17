function errMiddleware(err, req, res, next) {
    console.log('err happend');
    console.error(err.stack);
    res.status(500).send('Something broke!');
};
module.exports = errMiddleware;