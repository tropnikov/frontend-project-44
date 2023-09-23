#!/usr/bin/env node

import askQuestion from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = askQuestion('May I have your name?');
console.log(`Hello, ${name}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const checkForEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

let lost = false;

for (let i = 0; i < 3; i += 1) {
  const num = Math.trunc(Math.random() * 100);
  console.log(`Question: ${num}`);
  const answer = askQuestion('Your answer:');
  const correctAnswer = checkForEven(num);
  if (answer !== correctAnswer) {
    console.log(
      `'${answer} is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
    );
    lost = true;
    break;
  }
  console.log('Correct!');
}

if (!lost) console.log(`Congratulations, ${name}!`);
