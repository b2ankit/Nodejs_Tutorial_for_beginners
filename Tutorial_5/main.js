console.log("\r\n!! Welcome to Node Js Tutorial_5 !!");

/**=================== Defining a class : Start ====================== */

var student = function(){
    this.name = "Ankit";
    this.age = 24;
    this.email = "ankit19351@gmail.com";
}

/**=================== Defining a class : END ========================*/

var s1 = new student();                                      /**creating object of class student */
console.log(`\nDetails of Student :- \nName : ${s1.name}\nAge : ${s1.age}\nEmail : ${s1.email}\nAddress : ${s1.address}`);



/**=================== Prototype of Class student : Start ========================*/

student.prototype ={
    address: "Jalalpur, Saran",
    get_name:function(){
        return this.name;
    },

    get_age:function(){
        return this.age;
    },

    get_email:function(){
        return this.email;
    },

    get_address:function(){
        return this.address;
    },
}

/**=================== Prototype of Class student : END ========================*/
var s2 = new student();
console.log(`\nDetails of Student :- \nName : ${s2.name}\nAge : ${s2.age}\nEmail : ${s2.email}\nAddress : ${s2.address}`);
var s3 = new student();
console.log(`\nDetails of Student :- \nName : ${s3.get_name()}\nAge : ${s3.get_age()}\nEmail : ${s3.get_email()}\nAddress : ${s3.get_address()}`);

