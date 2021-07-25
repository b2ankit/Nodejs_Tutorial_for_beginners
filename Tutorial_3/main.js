console.log("\r\n!! Welcome to Node Js Tutorial_3 !!");

//require global_ex.js file
var global_ex = require('./global_ex');


//Display the export object
console.log("\r\nObject Details:-");
console.log("\rName : "+global_ex.user_obj.name+"\nAge : "+global_ex.user_obj.age+"\nEmail : "+global_ex.user_obj.email+"\nMobile : "+global_ex.user_obj.contact);


//Using export function
console.log("\r\nAddition of two Number");
global_ex.sum_func(20,31);
