#!/usr/bin/env node

import playGame from '../index.js';

const calcAnswer = (question) => {
  const arr = question.split(' ');
  let d;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] !== '..' && arr[i + 1] !== '..') {
      d = arr[i + 1] - arr[i];
      break;
    }
  }
  const ind = arr.indexOf('..');

  const ans = arr[0] !== '..'
    ? Number(arr[0]) + Number(d * ind)
    : Number(arr[1]) - Number(d);
  return String(ans);
};

const getQuestion = () => {
  const start = Math.trunc(Math.random() * 20);
  const step = Math.trunc(Math.random() * 10);
  const progression = [];

  for (let i = 0; i < 10; i += 1) {
    progression.push(start + step * i);
  }

  const index = Math.trunc(Math.random() * 10);
  progression[index] = '..';

  return progression.join(' ');
};

const brainProgression = () => {
  const question = 'What number is missing in the progression?';

  playGame(question, getQuestion, calcAnswer);
};

export default brainProgression;
