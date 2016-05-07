// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

var mysql = require('mysql');
var connection = mysql.createConnection({
    port: 3306,
    host: 'l9dwvv6j64hlhpul.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'kq5scorpetzduvh2',
    password: "twdnjrsf33zzss0n",
    database: "ottrjfpq9bc9yuuo"
});


connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;

	l9dwvv6j64hlhpul.cbetxkdyhwsb.us-east-1.rds.amazonaws.com
