class Todo{
    testErr(){
        return new Promise((resolve, reject)=>{
            reject('service err');
        })
    }
}

module.exports = Todo;