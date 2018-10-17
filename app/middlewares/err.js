function errMiddleware(err, req, res, next) {
    res.status(500).send({
        code:500,
        msg:'请求发生错误',
        err: err
    });
};
module.exports = errMiddleware;