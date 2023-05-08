const fs = require("fs");
const readline = require('readline');
const path = require('path');
const file = path.join(__dirname, 'text.txt');

let stream = fs.createWriteStream(file);

const readLineProject = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: `Введите текст и нажмите Enter:\n`
});

readLineProject.prompt();
readLineProject.on('line', (input) => {
  input = `${input}\n`;

  if(input.trim() === 'exit') {
    readLineProject.close();
  } else {
    stream.write(input);
  }
});

readLineProject.on('close', () => {
  console.log(`\nBuy!`);
});