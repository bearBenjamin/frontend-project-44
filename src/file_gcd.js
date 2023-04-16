import {
  showGreetings, showAnswerUser,
  getNameUser, getRandomNum,
  greetingsUser, roundQuestion, correctAnswer, exit,
  wrongAnswer, wrongAnswer1, congratulationsGame,
} from './index.js';

const gcd = () => {
  showGreetings();
  const nameUser = getNameUser();
  console.log(`${greetingsUser}${nameUser}!`);
  console.log('Find the greatest common divisor of given numbers.');
  let gcdResult;
  for (let i = 0; i < 3; i += 1) {
    let numA = getRandomNum();
    let numB = getRandomNum();
    console.log(`${roundQuestion}${numA}${' '}${numB}`);
    const answerUser = +showAnswerUser();
    if (numA === numB) {
      gcdResult = numA;
      const correct = gcdResult === answerUser;
      if (correct) {
        console.log(correctAnswer);
      } else {
        console.log(`${wrongAnswer}${gcdResult}\n${wrongAnswer1}`);
        return exit;
      }
    }
    do {
      if (numA > numB) {
        numA -= numB;
      } else {
        numB -= numA;
      }
    } while (numA !== numB);
    gcdResult = numA;
    const correct = gcdResult === answerUser;
    if (correct) {
      console.log(correctAnswer);
    } else {
      console.log(`${wrongAnswer}${gcdResult}\n${wrongAnswer1}`);
      return exit;
    }
  }
  console.log(`${congratulationsGame}${' '}${nameUser}!`);
  return exit;
};

export default gcd;
