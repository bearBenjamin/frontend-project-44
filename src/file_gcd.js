import {
  showGreetings, showAnswerUser, showGreetingsUser, showRoundQuestion,
  getNameUser, getRandomNum, getCalculationGcd,
  correctAnswer, exit,
  wrongAnswer, wrongAnswer1, congratulationsGame,
} from './index.js';

const gcd = () => {
  console.log('brain-gcd\n');
  showGreetings();
  const nameUser = getNameUser();
  showGreetingsUser(nameUser);
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const numA = getRandomNum();
    const numB = getRandomNum();
    const operationRound = ' ';
    showRoundQuestion(numA, operationRound, numB);
    const answerUser = +showAnswerUser();
    const gcdResult = getCalculationGcd(numA, numB);
    if (gcdResult === answerUser) {
      console.log(correctAnswer);
    } else {
      console.log(`${wrongAnswer}${gcdResult}\n${wrongAnswer1}${nameUser}`);
      return exit;
    }
  }
  console.log(`${congratulationsGame},${' '}${nameUser}!`);
  return exit;
};

export default gcd;
