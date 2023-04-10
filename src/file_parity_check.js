import {
  showGreetings, getUserName, showGreetingsUser, showRoundQuestion,
  getRandomNum, showAnswerUser, showCorrectAnswer, showCongratulations,
} from './index.js';

// eslint-disable-next-line consistent-return
const arbitaryNumber = () => {
  showGreetings();
  const nameUser = getUserName();
  console.log(`${showGreetingsUser()}${nameUser}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const exit = 'exit';
  for (let i = 0; i < 3; i += 1) {
    const numRandom = getRandomNum();
    console.log(`${showRoundQuestion()}${numRandom}`);
    const answerUser = showAnswerUser();
    const correct = (numRandom % 2 === 0 && answerUser === 'yes') || (numRandom % 2 !== 0 && answerUser === 'no');
    const noEvenNum = numRandom % 2 === 0 && answerUser !== 'yes';
    const noOddNum = numRandom % 2 !== 0 && answerUser !== 'no';
    if (correct) {
      console.log(showCorrectAnswer());
    }
    if (noEvenNum) {
      console.log(`${'\'yes\' is wrong answer ;(. Correct answer was \'no\'.\nLet\'s try again, '}${nameUser}`);
      return exit;
    }
    if (noOddNum) {
      console.log(`${'\'no\' is wrong answer ;(. Correct answer was \'yes\'.\nLet\'s try again, '}${nameUser}`);
      return exit;
    }
  }
  console.log(`${showCongratulations()}, ${nameUser}!`);
};

export default arbitaryNumber;
