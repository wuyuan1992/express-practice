const axios = require('axios');

class Request{
    static get(url, data={}) {
        return new Promise(async (resolve, reject) => {
            axios.get(url, { params: data })
                .then(res => Request.handleResponse(res.data, resolve, reject) )
                .catch(err => Request.handleErr(err, reject) );
        });
    }
    static post(url, data) {
        return new Promise(async (resolve, reject) => {
            axios.post(url, data)
                .then(res => Request.handleResponse(res.data, resolve, reject) )
                .catch(err => Request.handleErr(err, reject) );
        });
    }

    // 处理响应
    static handleResponse(res, resolve, reject) {
        if(res.code === 200){
            resolve(res.data);
        }else{
            reject(res.err);
        }
    }

    // 处理错误
    static handleErr(err, reject) {
        reject(err);
    }
}

module.exports = Request;