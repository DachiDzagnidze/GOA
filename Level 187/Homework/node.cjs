const EventEmitter = require('node:events');
const emitter = new EventEmitter();

// 1) 
emitter.on('hello', () => {
  console.log('Hello, World!');
});

// 2) 
emitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
  helloCount++;
});

// 3) 
emitter.on('login', () => {
  console.log('User has logged in.');
});

emitter.on('logout', () => {
  console.log('User has logged out.');
});
    
// 4) 
emitter.on('sum', (a, b) => {
  console.log(`Sum: ${a + b}`);
});

// 5) 
emitter.on('error', (message) => {
  console.error(`Error occurred: ${message}`);
});


emitter.emit('hello');

emitter.emit('greet', 'Alice');

emitter.emit('login');
emitter.emit('logout');

emitter.emit('sum', 49, 10);

emitter.emit('error', 'Something broke');