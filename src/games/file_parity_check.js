import {
  showGreetings, showAnswerUser, showGreetingsUser, showRoundQuestion,
  showWrongAnswer, showCorrectAnswer, showCongratulationsGame,
  getNameUser, getRandomNum, getExpectedAnswer,
  totalNumRounds, exit,
} from '../index.js';

const arbitaryNumber = () => {
  console.log('brain-even\n');
  showGreetings();
  const nameUser = getNameUser();
  showGreetingsUser(nameUser);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= totalNumRounds; i += 1) {
    const numRandom = getRandomNum();
    showRoundQuestion(numRandom);
    const answerUser = showAnswerUser();
    const expectedResponse = getExpectedAnswer(numRandom);
    if (expectedResponse === answerUser) {
      showCorrectAnswer();
    } else {
      showWrongAnswer(nameUser, answerUser, expectedResponse);
      return exit;
    }
  }
  showCongratulationsGame(nameUser);
  return exit;
};

export default arbitaryNumber;
