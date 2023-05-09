import { question } from 'readline-sync';
import { exit } from './utils.js';

const roundsCount = 3;

const runEngine = (nameGame, rules, generateRound) => {
  console.log(nameGame);
  console.log('Welcome to the Brain Games!');
  const userName = question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);
  for (let i = 1; i <= roundsCount; i += 1) {
    const [questionRound, expectedAnswer] = generateRound();
    console.log(questionRound);
    const answerUser = question('Your answer: ');
    if (expectedAnswer === answerUser) {
      console.log('Correct!');
    } else {
      console.log(`${answerUser} ${'is wrong answer ;(. Correct answer was '}${expectedAnswer}\n${'Let\'s try again, '}${userName}!`);
      return exit;
    }
  }
  console.log(`Congratulations, ${userName}!`);
  return exit;
};

export default runEngine;
