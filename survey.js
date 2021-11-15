const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let paragraph = [];

rl.question('What is your name?', (answer) => {
  console.log(`Thanks you for your valuable feedback: ${answer}`);

  rl.close();
});