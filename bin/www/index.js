const app = require('../../app/server');

// 监听端口
const server = app.listen(4890, ()=>{
    const { port } = server.address();
    console.log(`server running on ${port}`);
});