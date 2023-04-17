import {
  showGreetings, showAnswerUser, showGreetingsUser, showRoundQuestion,
  getNameUser, getRandomNum, getAnswer,
  exit, correctAnswer, wrongAnswer, wrongAnswer1,
  congratulationsGame,
} from './index.js';

const arbitaryNumber = () => {
  console.log('brain-even\n');
  showGreetings();
  const nameUser = getNameUser();
  showGreetingsUser(nameUser);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const numRandom = getRandomNum();
    showRoundQuestion(numRandom);
    const answerUser = showAnswerUser();
    const expectedResponse = getAnswer(numRandom);
    if (expectedResponse === answerUser) {
      console.log(correctAnswer);
    } else {
      console.log(`${answerUser} ${wrongAnswer}${expectedResponse}\n${wrongAnswer1}${nameUser}`);
      return exit;
    }
  }
  console.log(`${congratulationsGame}, ${nameUser}!`);
  return exit;
};

export default arbitaryNumber;
