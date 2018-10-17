const Request = require('../services/request');
const { success, fail } = require('../util/response');

class Todo{

    getList(req, res){
        const list = [
            { id:1, content:'完成阮一峰 js 教程'},
            { id:2, content:'完成阮一峰 es6 教程'},
            { id:3, content:'完成 express4 搭建项目'}
        ];

        success(res, list);
    }

    getDetail(req, res){
        const list = [
            { id:1, content:'完成阮一峰 js 教程'},
            { id:2, content:'完成阮一峰 es6 教程'},
            { id:3, content:'完成 express4 搭建项目'}
        ];
        const detail = list.find(li=> li.id == req.params.id);

        success(res, detail);
    }
    
    async tryErr(req, res){
        try{
            const result = await Request.get('http://www.testurl.com');
            
            success(res, result);
        }catch(err){
            fail(res, err);
        };
    }
}

module.exports = Todo;