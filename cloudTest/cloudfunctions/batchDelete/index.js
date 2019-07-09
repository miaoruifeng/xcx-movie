// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {  //async--await es7语法 异步操作
    try { //捕获异常
        return await db.collection('user').where({
            name: 'Jon'
        }).remove();
    } catch (e) {
        console.error(e);
    }
}