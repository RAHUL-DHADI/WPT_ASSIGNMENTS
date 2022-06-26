const url="";
let dbparams={

    host:'localhost',
    user:'root',
    password:'cdac',
    database:'nodejs',
    port:3306
};

const mysql= require('mysql2');
const con=mysql.createConnection(dbparams);
console.log('data base working');
