import askQuestion from './cli.js';
import greeting from './greeting.js';

const playGame = (startQuestion, getQuestion, getAnswer) => {
  const name = greeting();

  console.log(startQuestion);

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
      return console.log(`Let's try again, ${name}!`);
    }
    console.log('Correct!');
    i -= 1;
  }
  return console.log(`Congratulations, ${name}!`);
};

export default playGame;
