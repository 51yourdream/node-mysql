/**
 * Created by lipeng on 16/5/11.
 */
var mysql = require('mysql');
var conf = require('../conf/db');
//数据库连接池
module.exports =  mysql.createPool(conf);
