import {
  showGreetings, showAnswerUser,
  getNameUser, getRandomNum,
  greetingsUser, roundQuestion, correctAnswer, exit,
  wrongAnswer, wrongAnswer1, congratulationsGame,
} from './index.js';

const numPr = () => {
  showGreetings();
  const nameUser = getNameUser();
  console.log(`${greetingsUser} ${nameUser}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const numRandom = getRandomNum();
    console.log(`${roundQuestion}${numRandom}`);
    const answerUser = showAnswerUser();
    const wrongAnswerYes = `${'yes'}${wrongAnswer}${'no'}\n${wrongAnswer1}${nameUser}`;
    const wrongAnswerNo = `${'no'}${wrongAnswer}${'yes'}\n${wrongAnswer1}${nameUser}`;
    if (numRandom === 1) {
      const correct = answerUser === 'no';
      if (correct) {
        console.log(correctAnswer);
      } else {
        console.log(wrongAnswerYes);
        return exit;
      }
    }
    if (numRandom === 2 || numRandom === 3) {
      const correct = answerUser === 'yes';
      if (correct) {
        console.log(correctAnswer);
      } else {
        console.log(wrongAnswerNo);
        return exit;
      }
    }
    if (numRandom > 3) {
      const halfNumRandom = Math.floor(numRandom / 2);
      for (let j = 2; j <= halfNumRandom; j += 1) {
        if (numRandom % j === 0) {
          const correct = answerUser === 'no';
          if (correct) {
            console.log(correctAnswer);
            break;
          } else {
            console.log(wrongAnswerYes);
            return exit;
          }
        } else if (j === halfNumRandom) {
          const correct = answerUser === 'yes';
          if (correct) {
            console.log(correctAnswer);
          } else {
            console.log(wrongAnswerNo);
            return exit;
          }
        }
      }
    }
  }
  console.log(`${congratulationsGame}, ${nameUser}!`);
  return exit;
};

export default numPr;
