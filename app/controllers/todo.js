class Todo{

    getList(req, res){
        const list = [
            { id:1, content:'完成阮一峰 js 教程'},
            { id:2, content:'完成阮一峰 es6 教程'},
            { id:3, content:'完成 express4 搭建项目'}
        ];

        res.send({
            code: 200,
            msg:'成功响应',
            data:list
        });
    }

    getDetail(req, res){
        const list = [
            { id:1, content:'完成阮一峰 js 教程'},
            { id:2, content:'完成阮一峰 es6 教程'},
            { id:3, content:'完成 express4 搭建项目'}
        ];
        const detail = list.find(li=> li.id == req.params.id);

        res.send({
            code: 200,
            msg:'成功相应',
            data: detail
        });
    }
}

module.exports = Todo;