import askQuestion from './cli.js';

const playGame = (getQuestion, getAnswer) => {
  let i = 3;
  while (i > 0) {
    const question = getQuestion();
    const correctAnswer = getAnswer(question);
    console.log(`Question: ${question}`);
    const answer = askQuestion('Your answer:');
    if (answer !== correctAnswer) {
      console.log(
        `'${answer}' is wrong answer 😢. Correct answer was '${correctAnswer}'.`,
      );
      return false;
    }
    console.log('Correct!');
    i -= 1;
  }
  return true;
};

export default playGame;
