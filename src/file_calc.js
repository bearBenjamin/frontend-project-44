import {
  showGreetings, showAnswerUser, showGreetingsUser, showRoundQuestion,
  getNameUser, getRandomNum, getRandomOperation,
  correctAnswer, exit,
  wrongAnswer, wrongAnswer1, congratulationsGame,
} from './index.js';

const calculator = () => {
  console.log('brain-calc\n');
  showGreetings();
  const nameUser = getNameUser();
  showGreetingsUser(nameUser);
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const numA = getRandomNum();
    const numB = getRandomNum();
    const randOperation = getRandomOperation();
    showRoundQuestion(numA, randOperation, numB);
    const answerUser = +showAnswerUser();
    const addition = randOperation === '+';
    if (addition) {
      const result = numA + numB;
      if (answerUser === result) {
        console.log(correctAnswer);
      } else {
        console.log(`${answerUser} ${wrongAnswer}${result}\n${wrongAnswer1}${nameUser}!`);
        return exit;
      }
    }
    const substraction = randOperation === '-';
    if (substraction) {
      const result = numA - numB;
      if (answerUser === result) {
        console.log(correctAnswer);
      } else {
        console.log(`${answerUser} ${wrongAnswer}${result}\n${wrongAnswer1}${nameUser}!`);
        return exit;
      }
    }
    const multiplication = randOperation === '*';
    if (multiplication) {
      const result = numA * numB;
      if (answerUser === result) {
        console.log(correctAnswer);
      } else {
        console.log(`${answerUser} ${wrongAnswer}${result}\n${wrongAnswer1}${nameUser}!`);
        return exit;
      }
    }
  }
  console.log(`${congratulationsGame}, ${nameUser}!`);
  return exit;
};

export default calculator;
