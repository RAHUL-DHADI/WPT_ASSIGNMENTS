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

app.get('/find',(req,resp)=>{

    let pincode=req.query.pincode;
  

let output={status:false,city:'mumbai'};



con.query('select city from pincode where pin=?',[pincode],(err,rows)=>{

    if(err){ console.log(err)}
    else {
        if(rows.length>0){
            output.status=true;
            output.city=rows[0].city;
        }
      
    }

    resp.send(output);
})

  


});






app.listen(999,function(){

    console.log('listening to port 999');


})