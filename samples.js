//npm install chalk
const chalk = require('chalk')
var lib = require('./lib.js') //that's the whole object!  (./ is necessaryyy)
console.log(chalk.blueBright(JSON.stringify(lib.car))) 

//npm install progress
const ProgressBar = require('progress');
const bar = new ProgressBar(':bar', { total: 50 });
const timer = setInterval(() => {
  bar.tick();
  if (bar.complete) {
    clearInterval(timer);
  }
},100);