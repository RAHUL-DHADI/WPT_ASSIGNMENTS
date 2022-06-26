const express=require('express');
const app=express();


app.use(express.static('cp'));


app.get('/addItem',(req,resp)=>{

    console.log('');

    resp.send('add items needs to be done');
});

app.get('/updateItem',(req,resp)=>{



    resp.send('update item needs to be done');
});

app.listen(999,function(){

    console.log('listening to port 999');


})