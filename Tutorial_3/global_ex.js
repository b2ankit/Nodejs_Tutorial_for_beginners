//=============== File/Directory Discription Example : Start ===================== 
//Directory Example
console.log("Directory Location : "+__dirname);

// File Example
console.log("File Location : "+__filename);
//=============== File/Directory Discription Example : End =====================




//=============== Export object for other file : Start ===================== 
var user = {name:"Ankit",age:23,email:"ankit19351@gmail.com",contact:"9430465918"}
module.exports.user_obj = user;
//=============== Export object for other file : End =====================


//=============== Define function to export : Start ===================== 
var sumofNum = function(a,b)
{
    console.log("\rSum of a("+a+") and b("+b+") = "+ (a+b));
}
module.exports.sum_func = sumofNum;
//=============== Define function to export Example : End =====================