import {
  showGreetings, getUserName, showGreetingsUser, getRandomNum,
  showRoundQuestion, showAnswerUser, showCorrectAnswer, showCongratulations,
} from './index.js';

// eslint-disable-next-line consistent-return
const calculator = () => {
  showGreetings();
  const userName = getUserName();
  console.log(`${showGreetingsUser()} ${userName}!`);
  console.log('What is the result of the expression?');
  const result = 'exit';
  for (let i = 0; i < 3; i += 1) {
    const numberRandom1 = getRandomNum();
    const numberRandom2 = getRandomNum();
    const arrayRandOperation = ['+', '-', '*'];
    const randOperation = arrayRandOperation[Math.floor(Math.random() * arrayRandOperation.length)];
    const addition = randOperation === '+';
    const substraction = randOperation === '-';
    const multiplication = randOperation === '*';
    if (addition) {
      console.log(`${showRoundQuestion()}${numberRandom1} + ${numberRandom2}`);
      const resultUser = showAnswerUser();
      const sum = numberRandom1 + numberRandom2;
      if (Number(resultUser) === sum) {
        console.log(showCorrectAnswer());
      } else {
        console.log(`'${resultUser}' ${'is wrong answer ;(. Correct answer was '}'${sum}'${'\nLet\'s try again, '}${userName}`);
        return result;
      }
    }
    if (substraction) {
      console.log(`${showRoundQuestion()}${numberRandom1} - ${numberRandom2}`);
      const resultUser = showAnswerUser();
      const sub = numberRandom1 - numberRandom2;
      if (Number(resultUser) === sub) {
        console.log(showCorrectAnswer());
      } else {
        console.log(`'${resultUser}' ${'is wrong answer ;(. Correct answer was '}'${sub}'${'\nLet\'s try again, '}${userName}`);
        return result;
      }
    }
    if (multiplication) {
      console.log(`${showRoundQuestion()}${numberRandom1} * ${numberRandom2}`);
      const resultUser = showAnswerUser();
      const multip = numberRandom1 * numberRandom2;
      if (Number(resultUser) === multip) {
        console.log(showCorrectAnswer());
      } else {
        console.log(`'${resultUser}' ${'is wrong answer ;(. Correct answer was '}'${multip}'${'\nLet\'s try again, '}${userName}`);
        return result;
      }
    }
  }
  console.log(`${showCongratulations()}, ${userName}!`);
};

export default calculator;
