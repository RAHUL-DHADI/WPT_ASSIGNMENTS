const express=require('express');
const app=express();

const mysql=require('mysql2');

let dbparams={

    host:'localhost',
    user:'root',
    password:'cdac',
    database:'nodejs',
    port:3306


};
const con=mysql.createConnection(dbparams);


app.use(express.static('cp'));

app.get('/findbalance',(req,resp)=>{

    let acctno=req.query.acctno;
  

let output={status:false,balance:0};



con.query('select balance from bank where acctno=?',[acctno],(err,rows)=>{

    if(err){ console.log(err)}
    else {
        if(rows.length>0){
            output.status=true;
            output.balance=rows[0].balance;
            console.log(rows);
        }
      
    }

    resp.send(output);
})

  


});






app.listen(999,function(){

    console.log('listening to port 999');


})