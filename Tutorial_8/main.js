console.log("\r\n!! Welcome to Node Js Tutorial_8 !!");

const fs = require("fs");       /** Rwequire Node js File system */
const http = require("http"); /** Require Node js Http */

var file_value = "<h1><center>!! Welcome to Node Js Turotial 8 !!</center></h1><br><p> Reading content from File system............. </p>"
var fread_data;
/** ========================= File System Operations : Start ============================== */

/** Opening the File */
fs.open("test.txt","w",function(err,data){
    if(err)throw err;
    console.log("File open Successfully\n");

});

/** Writing the file system */
fs.writeFile(__dirname+"/test.txt",file_value,function(err,data){
    if(err) throw err;
    console.log("Data write : Success\n");
})
    
/** Reading File System */
fs.readFile(__dirname+"/test.txt","utf8",function(err,data){
    if(err) throw err;
    fread_data = data;
})



/** ========================= File System Operations : END ============================== */

/** ================== Displaying File system Content on Browser : Start ================ */

const server = http.createServer(function(req,res){
    res.writeHead(200,{"content-type":"text/html"});
    res.write(fread_data);
    res.end();
}).listen(3000,()=> console.log("Server Running at port 30000"));

/** ================== Displaying File system Content on Browser : END ================ */

/** Removing the file system */
fs.unlink(__dirname+"/test.txt",function(err){
    if(err) throw err;
    console.log("File deleted Successfully\n");
})
