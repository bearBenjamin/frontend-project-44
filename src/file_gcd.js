import {
  showGreetings, showAnswerUser, showGreetingsUser, showRoundQuestion,
  getNameUser, getRandomNum,
  correctAnswer, exit,
  wrongAnswer, wrongAnswer1, congratulationsGame,
} from './index.js';

const gcd = () => {
  console.log('brain-gcd\n');
  showGreetings();
  const nameUser = getNameUser();
  showGreetingsUser();
  console.log('Find the greatest common divisor of given numbers.');
  let gcdResult;
  for (let i = 0; i < 3; i += 1) {
    let numA = getRandomNum();
    let numB = getRandomNum();
    const operationRound = ' ';
    showRoundQuestion(numA, operationRound, numB);
    // console.log(`${roundQuestion}${numA}${}${numB}`);
    const answerUser = +showAnswerUser();
    if (numA === numB) {
      gcdResult = numA;
    } else {
      do {
        if (numA > numB) {
          numA -= numB;
        } else {
          numB -= numA;
        }
      } while (numA !== numB);
      gcdResult = numA;
    }
    if (gcdResult === answerUser) {
      console.log(correctAnswer);
    } else {
      console.log(`${wrongAnswer}${gcdResult}\n${wrongAnswer1}${nameUser}`);
      return exit;
    }
}
  console.log(`${congratulationsGame}${' '}${nameUser}!`);
  return exit;
};

export default gcd;
