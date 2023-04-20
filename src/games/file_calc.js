import {
  showGreetings, showGreetingsUser, showRoundQuestionCalc, showAnswerUser,
  showCorrectAnswer, showWrongAnswerCalc, showCongratulationsGame,
  getNameUser, getRandomNum, getRandomOperation,
  totalNumRounds, exit,
  getOperationAddition, getOperationSubstraction, getOperationMultiplication,
} from '../index.js';

const calculator = () => {
  console.log('brain-calc\n');
  showGreetings();
  const nameUser = getNameUser();
  showGreetingsUser(nameUser);
  console.log('What is the result of the expression?');
  for (let i = 1; i <= totalNumRounds; i += 1) {
    const numA = getRandomNum();
    const numB = getRandomNum();
    const randOperation = getRandomOperation();
    showRoundQuestionCalc(numA, numB, randOperation);
    const answerUser = +showAnswerUser();
    const sum = getOperationAddition(numA, numB, randOperation);
    const sub = getOperationSubstraction(numA, numB, randOperation);
    const multip = getOperationMultiplication(numA, numB, randOperation);
    if ((answerUser === sum) || (answerUser === sub) || (answerUser === multip)) {
      showCorrectAnswer();
    } else {
      showWrongAnswerCalc(nameUser, answerUser, sum, sub, multip);
      return exit;
    }
  }
  showCongratulationsGame(nameUser);
  return exit;
};

export default calculator;
