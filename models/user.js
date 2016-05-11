/**
 * Created by lipeng on 16/5/11.
 */
var pool = require('./db_base');

// 向前台返回JSON方法的简单封装
var jsonWrite = function (res, result) {
    if(!result) {
        res.json({
            code:'1',
            msg: '操作失败',
            url:'' //跳转的url
        });
    } else {
        res.json(result);
    }
};

var user = {
    findById: function (res,id) {
        pool.getConnection(function (err,connection) {
            console.log(id);
            connection.query('SELECT * FROM user WHERE id = ?',id, function (err,result) {
                jsonWrite(res,result);
            });
        });
    }
};

module.exports = user;