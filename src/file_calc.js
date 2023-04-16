import {
  showGreetings, showAnswerUser,
  getNameUser, getRandomNum, getRandomOperation,
  greetingsUser, roundQuestion, correctAnswer, exit,
  wrongAnswer, wrongAnswer1, congratulationsGame,
} from './index.js';

const calculator = () => {
  showGreetings();
  const nameUser = getNameUser();
  console.log(`${greetingsUser} ${nameUser}!`);
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const numA = getRandomNum();
    const numB = getRandomNum();
    const randOperation = getRandomOperation();
    const addition = randOperation === '+';
    const substraction = randOperation === '-';
    const multiplication = randOperation === '*';
    if (addition) {
      console.log(`${roundQuestion}${numA} + ${numB}`);
      const resultUser = +showAnswerUser();
      const sum = numA + numB;
      if (resultUser === sum) {
        console.log(correctAnswer);
      } else {
        console.log(`'${resultUser}' ${wrongAnswer}'${sum}'\n${wrongAnswer1}${nameUser}`);
        return exit;
      }
    }
    if (substraction) {
      console.log(`${roundQuestion}${numA} - ${numB}`);
      const resultUser = +showAnswerUser();
      const sub = numA - numB;
      if (resultUser === sub) {
        console.log(correctAnswer);
      } else {
        console.log(`'${resultUser}' ${wrongAnswer}'${sub}'\n${wrongAnswer1}${nameUser}`);
        return exit;
      }
    }
    if (multiplication) {
      console.log(`${roundQuestion}${numA} * ${numB}`);
      const resultUser = +showAnswerUser();
      const multip = numA * numB;
      if (resultUser === multip) {
        console.log(correctAnswer);
      } else {
        console.log(`'${resultUser}' ${wrongAnswer}'${multip}'\n${wrongAnswer1}${nameUser}`);
        return exit;
      }
    }
  }
  console.log(`${congratulationsGame}, ${nameUser}!`);
  return exit;
};

export default calculator;
