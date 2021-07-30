console.log("\r\n!! Welcome to Node Js Tutorial_10 !!\n");

/** Creating a custom event  */


/** ================== Custom Event Example : Start =========================== */
const events = require("events");           /** Exporting events module */
var event = new events.EventEmitter();      /** Creating Object of it */

event.on('click',(n)=>{console.log(`Hello Node js tutorial ${n} !!`)});
event.emit('click',10);
/** ================== Custom Event Example : END =========================== */


/** ======================== Custom Event Example2 : Start ========================== */
const display_func = function(num)
{
    console.log(`Welcome to Node js Tutorial series ${num}`);
}


event.on('click2',display_func);
event.emit('click2',10);
/** ======================== Custom Event Example2 : END ========================== */