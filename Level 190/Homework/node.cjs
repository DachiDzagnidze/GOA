
// lets create process  require('events') module and create an instance of EventEmitter

const EventEmitter = require('node:events');

const emitter = new EventEmitter()
// 1) Create an event listener for a custom event called 'hello' that logs "Hello, World!" to the console when the event is emitted.
emitter.on('hello', () => {
    console.log('Hello, World!');
});

// 2) Create an event listener for a custom event called 'greet' that takes a name as an argument and logs "Hello, [name]!" to the console when the event is emitted. Also, keep track of how many times the 'greet' event has been emitted and log that count each time the event is emitted. and afer creating it in python then we will discharge in nopde.js

let helloCout = 0;

emmiter.on('greet',name => {
    console.log(`Hello, ${name}!`);
    helloCount++;
    console.log(`Greet event has been emitted ${helloCount} times.`);
}
)
// 3) Create event listeners for 'login' and 'logout' events that log "User has logged in." and "User has logged out." respectively when the events are emitted.


emmiter.on('login', () => { 
    console.log("user has logged in.");
})