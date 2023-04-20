import {
  showGreetings, showAnswerUser, showGreetingsUser, showRoundQuestion,
  showCorrectAnswer, showWrongAnswer, showCongratulationsGame, getNameUser, getRandomNum,
  totalNumRounds, exit,
} from '../index.js';

const numPr = () => {
  console.log('brain-prime\n');
  showGreetings();
  const nameUser = getNameUser();
  showGreetingsUser(nameUser);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 1; i <= totalNumRounds; i += 1) {
    const numRandom = getRandomNum();
    showRoundQuestion(numRandom);
    const answerUser = showAnswerUser();
    if (numRandom) {
      let expectedResponse = numRandom === 1 ? 'no' : 'yes';
      expectedResponse = numRandom === 2 || numRandom === 3 ? 'yes' : 'no';
      const halfNumRandom = Math.floor(numRandom / 2);
      for (let j = 2; j <= halfNumRandom; j += 1) {
        if (numRandom % j === 0) {
          expectedResponse = 'no';
          break;
        } else if (j === halfNumRandom) {
          expectedResponse = 'yes';
        }
      }
      if (expectedResponse === answerUser) {
        showCorrectAnswer();
      } else {
        showWrongAnswer(nameUser, answerUser, expectedResponse);
        return exit;
      }
    }
  }
  showCongratulationsGame(nameUser);
  return exit;
};

export default numPr;
