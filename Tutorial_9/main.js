console.log("\r\n!! Welcome to Node Js Tutorial_9 !!\n");

/** This tutorial about sync function of file system 
 * 
 * Note : Always use Try and catch for Sync fucntion because
 *        there is no callback is present from this.
 * 
*/

/** ============================ Example : Start =========================== */

const fs = require("fs");

try{
    var data = fs.readFileSync(__dirname+"/test.txt","utf8");
    console.log(data);
}
catch(e){
    console.log(e);
}

console.log("\nEnd of Tutorial 9")
/** ============================ Example : END =========================== */