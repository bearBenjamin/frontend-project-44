import {
  showGreetings, showAnswerUser,
  getUserName, getRandomNum,
  greetingsUser, roundQuestion, correctAnswer, exit,
  wrongAnswer, wrongAnswer1, congratulationsGame,
} from './index.js';

const gcd = () => {
  showGreetings();
  const userName = getUserName();
  console.log(`${greetingsUser}${userName}!`);
  console.log('Find the greatest common divisor of given numbers.');
  let gcdresult;
  for (let i = 0; i < 3; i += 1) {
    let numA = getRandomNum();
    let numB = getRandomNum();
    console.log(`${roundQuestion}${numA}${' '}${numB}`);
    const answerUser = +showAnswerUser();
    if (numA === numB) {
      gcdresult = numA;
      const correct = gcdresult === answerUser;
      if (correct) {
        console.log(correctAnswer);
      } else {
        console.log(`${wrongAnswer}${gcdresult}\n${wrongAnswer1}`);
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
    gcdresult = numA;
    const correct = gcdresult === answerUser;
    if (correct) {
      console.log(correctAnswer);
    } else {
      console.log(`${wrongAnswer}${gcdresult}\n${wrongAnswer1}`);
      return exit;
    }
  }
  console.log(`${congratulationsGame}${' '}${userName}!`);
  return exit;
};

export default gcd;
