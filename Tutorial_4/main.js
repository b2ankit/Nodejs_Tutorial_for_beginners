console.log("\r\n!! Welcome to Node Js Tutorial_4 !!");

//================== Example of Let :START ====================
var a = 50;
console.log("value of a = "+a);
var a = 100;
console.log("value of a = "+a);

let b = 50;
console.log("value of b = "+b);
// let b = 100;
// console.log("value of b = "+b);          /* Error : SyntaxError: Identifier 'b' has already been declared*/


//================== Example of Let :END ====================


//================== Example of Const :START ====================
const x = 10;
console.log("value of x = "+x);
// x = 20;                          /** TypeError: Assignment to constant variable. */
// console.log("value of x = "+x);



// we can modify the const variable if it is present inside a object

const data_obj = {a1:110}
console.log("data_obj const value = "+data_obj.a1);
data_obj.a1 = 220;
console.log("data_obj const value = "+data_obj.a1);
//================== Example of Const :END ====================

//================== Example of Templating string :START ====================
var name = "Ankit";
var age = 24;

console.log("\r\nstring concatenation Example\nName : "+ name +"\nAge : "+age+"\n"); //string concatenation
console.log("\r\nNormal String display Example\nName : %s\nAge : %s\n",name,age); //Normal 
console.log(`\r\nTemplating format Example\nName : ${name}\nAge : ${age}\n`); //Templating String


//================== Example of Templating string :END ====================


//================== Class Example :START ====================\\
//Define a class type 1
class users{
    constructor(){
        
        this.c_name = "Ankit";
        this.c_age = 24;
    }

    get_name(){
        return this.c_name;
    }
    get_age(){
        return this.c_age;
    }

}

//Creating a Object
var user_obj = new users();
console.log("name : %s\nage : %s\n",user_obj.get_name(),user_obj.get_age());



//Define a class type 2
class users2{
    constructor(name,age){
        
        this.c_name = name;
        this.c_age = age;
    }

    get_name(){
        return this.c_name;
    }
    get_age(){
        return this.c_age;
    }

}

//Creating a Object
var user_obj2 = new users2("Om Construction",35);
console.log("name : %s\nage : %s\n",user_obj2.get_name(),user_obj2.get_age());
//================== Class Example :END ====================

