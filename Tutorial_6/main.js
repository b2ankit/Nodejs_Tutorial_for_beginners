console.log("\r\n!! Welcome to Node Js Tutorial_6 !!");


var cal_module = require("./cal_module");                       /**require each function from cal_modules */

var a = 10;                 /**Intialing value of a */
var b = 20;                 /**Intialing value of b */

/** using the module function */
console.log(`\nArthimatic result of a(i.e ${a}) and b(i.e ${b}) :- \nSum : ${cal_module.addition(a,b)}\nSub : ${cal_module.subtraction(a,b)}\nMul : ${cal_module.multiplication(a,b)}\nDiv : ${cal_module.divison(a,b)}\nMod : ${cal_module.mod(a,b)}\n`);