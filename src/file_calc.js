import {
  showGreetings, showAnswerUser,
  getUserName, getRandomNum,
  greetingsUser, roundQuestion, correctAnswer, exit,
  wrongAnswer, wrongAnswer1, congratulationsGame,
} from './index.js';

// eslint-disable-next-line consistent-return
const calculator = () => {
  showGreetings();
  const userName = getUserName();
  console.log(`${greetingsUser} ${userName}!`);
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const numRandom = getRandomNum();
    const numRandom1 = getRandomNum();
    const arrayRandOperation = ['+', '-', '*'];
    const randOperation = arrayRandOperation[Math.floor(Math.random() * arrayRandOperation.length)];
    const addition = randOperation === '+';
    const substraction = randOperation === '-';
    const multiplication = randOperation === '*';
    if (addition) {
      console.log(`${roundQuestion}${numRandom} + ${numRandom1}`);
      const resultUser = +showAnswerUser();
      const sum = numRandom + numRandom1;
      if (resultUser === sum) {
        console.log(correctAnswer);
      } else {
        console.log(`'${resultUser}' ${wrongAnswer}'${sum}'\n${wrongAnswer1}${userName}`);
        return exit;
      }
    }
    if (substraction) {
      console.log(`${roundQuestion}${numRandom} - ${numRandom1}`);
      const resultUser = +showAnswerUser();
      const sub = numRandom - numRandom1;
      if (resultUser === sub) {
        console.log(correctAnswer);
      } else {
        console.log(`'${resultUser}' ${wrongAnswer}'${sub}'\n${wrongAnswer1}${userName}`);
        return exit;
      }
    }
    if (multiplication) {
      console.log(`${roundQuestion}${numRandom} * ${numRandom1}`);
      const resultUser = +showAnswerUser();
      const multip = numRandom * numRandom1;
      if (resultUser === multip) {
        console.log(correctAnswer);
      } else {
        console.log(`'${resultUser}' ${wrongAnswer}'${multip}'\n${wrongAnswer1}${userName}`);
        return exit;
      }
    }
  }
  console.log(`${congratulationsGame}, ${userName}!`);
  return exit;
};

export default calculator;
