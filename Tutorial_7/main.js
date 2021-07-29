console.log("\r\n!! Welcome to Node Js Tutorial_7 !!");

const http = require("http");   /**exporting the http module of Node js */


/** ========================= Creating server : Start ========================== */
const server = http.createServer(function(req,res){
    res.writeHead(200,{"content-type":"text/html"});
    res.write("<h3><center>!! Node js Server created : Successfully !!</center></h3>");
    res.end();
}).listen(3000,()=> console.log("Server Running at port 30000"));

/** ========================= Creating server : END ========================== */
