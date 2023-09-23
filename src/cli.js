import readlineSync from 'readline-sync';

const askQuestion = (q) => readlineSync.question(`${q} `);

export default askQuestion;
