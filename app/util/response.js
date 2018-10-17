function success(res, result){
    console.log(result);
    res.send({
        code:200,
        msg:'响应成功',
        data: result
    })
}

function fail(res, err){
    console.log(err);
    res.send({
        code:400,
        msg: err.msg || '响应失败',
        data: null
    })
}

module.exports = {
    success,
    fail
}