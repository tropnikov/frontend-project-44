#!/usr/bin/env node

import greeting from '../greeting.js';
import playGame from '../index.js';

const calcAnswer = (question) => {
  const [num1, num2] = question.split(' ');
  let a = Number(num1);
  let b = Number(num2);

  while (b) {
    const tmp = b;
    b = a % b;
    a = tmp;
  }
  return String(a);
};

const getQuestion = () => {
  const num1 = Math.trunc(Math.random() * 50);
  const num2 = Math.trunc(Math.random() * 50);

  return `${num1} ${num2}`;
};
const brainGcd = () => {
  const name = greeting();

  console.log('Find the greatest common divisor of given numbers.');

  const isWinner = playGame(getQuestion, calcAnswer);

  if (isWinner) console.log(`Congratulations, ${name}!`);
  if (!isWinner) console.log(`Let's try again, ${name}!`);
};

export default brainGcd;
