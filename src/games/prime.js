#!/usr/bin/env node

import greeting from '../greeting.js';
import playGame from '../index.js';

const calcAnswer = (num) => {
  if (num === 2 || num === 3) return 'yes';
  if (num <= 1 || num % 2 === 0 || num % 3 === 0) return 'no';
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return 'no';
  }
  return 'yes';
};

const getQuestion = () => {
  const num = Math.trunc(Math.random() * 100);
  return num;
};

const brainPrime = () => {
  const name = greeting();

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const isWinner = playGame(getQuestion, calcAnswer);

  if (isWinner) console.log(`Congratulations, ${name}!`);
  if (!isWinner) console.log(`Let's try again, ${name}!`);
};

export default brainPrime;
