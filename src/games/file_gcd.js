import {
  showGreetings, showAnswerUser, showGreetingsUser, showRoundQuestion,
  showCorrectAnswer, showWrongAnswer, showCongratulationsGame,
  getNameUser, getRandomNum, getCalculationGcd,
  totalNumRounds, exit,
} from '../index.js';

const gcd = () => {
  console.log('brain-gcd\n');
  showGreetings();
  const nameUser = getNameUser();
  showGreetingsUser(nameUser);
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 1; i <= totalNumRounds; i += 1) {
    const numA = getRandomNum();
    const numB = getRandomNum();
    const operationRound = ' ';
    showRoundQuestion(numA, operationRound, numB);
    const answerUser = +showAnswerUser();
    const expectedResponse = getCalculationGcd(numA, numB);
    if (expectedResponse === answerUser) {
      showCorrectAnswer();
    } else {
      showWrongAnswer(nameUser, answerUser, expectedResponse);
      return exit;
    }
  }
  showCongratulationsGame(nameUser);
  return exit;
};

export default gcd;
