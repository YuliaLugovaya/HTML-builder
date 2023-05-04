const fs = require("fs");
const readline = require('readline');
const path = require('path');
const file = path.join(__dirname, 'text.txt');

let stream = fs.createWriteStream(file);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: `Введите текст и нажмите Enter:\n`
});

rl.prompt();
rl.on('line', (input) => {
  input = `${input}\n`;

  if(input.trim() === 'exit') {
    rl.close();
  } else {
    stream.write(input);
  }
});

rl.on('close', () => {
  console.log(`\nBuy!`);
});