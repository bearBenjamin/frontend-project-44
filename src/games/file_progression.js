import {
  showGreetings, showAnswerUser, showGreetingsUser, showRoundQuestion,
  showCorrectAnswer, showWrongAnswer, showCongratulationsGame,
  getNameUser, getRandomNum, getArrayProgressionRound, getRandomItemArray,
  totalNumRounds, exit,
} from '../index.js';

const progression = () => {
  console.log('brain-progression\n');
  showGreetings();
  const nameUser = getNameUser();
  showGreetingsUser(nameUser);
  console.log('Whan number is missing in the progrission?');
  for (let i = 1; i <= totalNumRounds; i += 1) {
    const numRandom = getRandomNum();
    const arrayProgression = getArrayProgressionRound(numRandom);
    const itemTwoPoint = getRandomItemArray(arrayProgression);
    const expectedResponse = arrayProgression[itemTwoPoint];
    arrayProgression[itemTwoPoint] = '..';
    const strProgression = arrayProgression.join('  ');
    showRoundQuestion(strProgression);
    const answerUser = +showAnswerUser();
    if (answerUser === expectedResponse) {
      showCorrectAnswer();
    } else {
      showWrongAnswer(nameUser, answerUser, expectedResponse);
      return exit;
    }
  }
  showCongratulationsGame(nameUser);
  return exit;
};

export default progression;
