#!/usr/bin/env node

import playGame from '../index.js';

const calcAnswer = (num) => (num % 2 === 0 ? 'yes' : 'no');

const getQuestion = () => Math.trunc(Math.random() * 100);

const brainEven = () => {
  const question = 'Answer "yes" if the number is even, otherwise answer "no".';

  playGame(question, getQuestion, calcAnswer);
};

export default brainEven;
