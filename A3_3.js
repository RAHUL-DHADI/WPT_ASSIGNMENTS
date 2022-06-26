const http = require('http');
const url = require("url");

http.createServer((req,res)=>{

    let q = url.parse(req.url,true).query ;
    

    let d=2*(q.radius);

console.log('listening to port 800..........');
res.write('the radius is  '+q.radius+"  ")
res.write('diameter is  '+d);
res.end();

}).listen(800);