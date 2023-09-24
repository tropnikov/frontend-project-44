#!/usr/bin/env node

import greeting from '../greeting.js';
import playGame from '../index.js';

const calcAnswer = (num) => (num % 2 === 0 ? 'yes' : 'no');

const getQuestion = () => Math.trunc(Math.random() * 100);

const brainEven = () => {
  const name = greeting();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const isWinner = playGame(getQuestion, calcAnswer);

  if (isWinner) console.log(`Congratulations, ${name}!`);
};

export default brainEven;
