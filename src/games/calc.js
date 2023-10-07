#!/usr/bin/env node

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
    default:
      // eslint-disable-next-line no-useless-return, consistent-return
      return;
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
  const question = 'What is the result of the expression?';

  playGame(question, getQuestion, calcAnswer);
};

export default brainCalc;
