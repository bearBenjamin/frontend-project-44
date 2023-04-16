import {
  showGreetings, showAnswerUser,
  getNameUser, getRandomNum,
  greetingsUser, roundQuestion, correctAnswer, exit,
  wrongAnswer, wrongAnswer1, congratulationsGame,
} from './index.js';

const arbitaryNumber = () => {
  showGreetings();
  const nameUser = getNameUser();
  console.log(`${greetingsUser}${nameUser}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const numRandom = getRandomNum();
    console.log(`${roundQuestion}${numRandom}`);
    const answerUser = showAnswerUser();
    const correct = (numRandom % 2 === 0 && answerUser === 'yes') || (numRandom % 2 !== 0 && answerUser === 'no');
    const noEvenNum = numRandom % 2 === 0 && answerUser !== 'yes';
    const noOddNum = numRandom % 2 !== 0 && answerUser !== 'no';
    if (correct) {
      console.log(correctAnswer);
    }
    if (noEvenNum) {
      console.log(`${'\'yes\''} ${wrongAnswer} ${'\'no\'.'}\n${wrongAnswer1}${nameUser}`);
      return exit;
    }
    if (noOddNum) {
      console.log(`${'\'no\''} ${wrongAnswer} ${'\'yes\'.'}\n${wrongAnswer1}${nameUser}`);
      return exit;
    }
  }
  console.log(`${congratulationsGame}, ${nameUser}!`);
  return exit;
};

export default arbitaryNumber;
