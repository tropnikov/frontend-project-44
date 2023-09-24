#!/usr/bin/env node

import greeting from '../greeting.js';
import playGame from '../index.js';

const calcAnswer = (question) => {
  const [num1, operand, num2] = question.split(' ');
  const a = Number(num1);
  const b = Number(num2);
  // eslint-disable-next-line default-case
  switch (operand) {
    case '+':
      return String(a + b);
    case '*':
      return String(a * b);
    case '-':
      return String(a - b);
  }
};

const getQuestion = () => {
  const operations = ['-', '+', '*'];
  const a = Math.trunc(Math.random() * 100);
  const b = Math.trunc(Math.random() * 100);
  const operand = operations[Math.floor(Math.random() * operations.length)];
  return `${a} ${operand} ${b}`;
};

const brainCalc = () => {
  const name = greeting();

  console.log('What is the result of the expression?');

  const isWinner = playGame(getQuestion, calcAnswer);

  if (isWinner) console.log(`Congratulations, ${name}!`);
};

export default brainCalc;
