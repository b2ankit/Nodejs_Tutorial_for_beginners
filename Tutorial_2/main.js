console.log("\r\n!! Welcome to Node Js Tutorial_2 !!");

//=============== Object Example : Start ===================== 

var user = {name:"Ankit",age:23,email:"ankit19351@gmail.com",contact:"9430465918"}
console.log("\r\nObject Details:-");
console.log("\rName : "+user.name+"\nAge : "+user.age+"\nEmail : "+user.email+"\nMobile : "+user.contact);

//=============== Object Example : End =====================


//=============== Anonymous function Example : Start ===================== 
console.log("\nAnonymous Function Example:-");
var sumofNum = function(a,b)
{
    console.log("\rSum of a("+a+") and b("+b+") = "+ (a+b));
}

var subofNum = function(a,b)
{
    console.log("\rSub of a("+a+") and b("+b+") = "+ (b-a));
}

sumofNum(10,15);
subofNum(10,15);
//=============== Anonymous function Example : End =====================


//=============== Arrow function Example : Start ===================== 
console.log("\n Arrow Function Example:-");
var mulofNum = (a,b) => {console.log("\rSum of a("+a+") and b("+b+") = "+ (a*b));}
var divofNum = (a,b) => {console.log("\rSub of a("+a+") and b("+b+") = "+ (b/a));}

mulofNum(10,15);
divofNum(10,15);
//=============== Anonymous function Example : End =====================