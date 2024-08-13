const http=require('http');
/* crear servidor basico */
const server=http.createServer((req,res) => {
res.statusCode=200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');


});
server.listen(3000,'localhost',()=>{
    console.log('servidor corre por 3000')

});
