const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let paragraph;

rl.question('What is your name? Nicknames are also acceptable :) ', (answer) => {
  paragraph += `My name is ${answer} \n`;
  rl.question('What is an activity you like doing? ', (answer) => {
    paragraph += `My favorite activity is ${answer} \n`;
    rl.question('What do you listen to while doing that? ', (answer) => {
      paragraph += `I listen to ${answer} while doing that \n`;
      rl.question('What meal is your favorite? (eg: dinner, brunch, etc.)? ', (answer) => {
        paragraph += `My favorite meal is ${answer} \n`;
        rl.question('What is your favorite thing to eat for that meal? ', (answer) => {
          paragraph += `My favorite thing to eat for that meal is ${answer} \n`;
          rl.question('What sport is your absolute favorite? ', (answer) => {
            paragraph += `My absolute favorite sport is ${answer} \n`;
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              paragraph += `My super power is ${answer} \n`;
              console.log(paragraph);
              rl.close();
            });
          });
        });
      });
    });
  });
});
