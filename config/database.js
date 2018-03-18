const mysql = require('mysql');

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'Alpro'
})

connection.connect(function(err, data){
    if(data) console.log('Database Connected');
    else console.log("Database can't connect");
})

module.exports = connection;