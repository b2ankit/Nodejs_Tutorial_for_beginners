console.log("\r\n!! Welcome to Node Js Tutorial_10 !!\n");

/** Creating a custom event  */


/** ================== Custom Event Example : Start =========================== */
const events = require("events");           /** Exporting events module */
var event = new events.EventEmitter();      /** Creating Object of it */

event.on('click',(n)=>{console.log(`Hello Node js tutorial ${n} !!`)});
event.emit('click',10);
/** ================== Custom Event Example : END =========================== */