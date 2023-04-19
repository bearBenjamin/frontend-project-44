import {
  showGreetings, showAnswerUser, showGreetingsUser, showRoundQuestion,
  getNameUser, getRandomNum, getArrayProgressionRound, getRandomItemArray,
  exit, correctAnswer, wrongAnswer, wrongAnswer1,
  congratulationsGame,
} from './index.js';

const progression = () => {
  console.log('brain-progression\n');
  showGreetings();
  const nameUser = getNameUser();
  showGreetingsUser(nameUser);
  console.log('Whan number is missing in the progrission?');
  for (let i = 0; i < 3; i += 1) {
    const numRandom = getRandomNum();
    const arrayProgression = getArrayProgressionRound(numRandom);
    /* const arrayProgression = [];
    for (let j = 0; j < 10; j += 1) {
      let itemArrayProgression = numRandom;
      itemArrayProgression += 2;
      arrayProgression.push(itemArrayProgression);
    } */
    const itemTwoPoint = getRandomItemArray(arrayProgression);
    const answerCorrect = arrayProgression[itemTwoPoint];
    arrayProgression[itemTwoPoint] = '..';
    const strProgression = arrayProgression.join('  ');
    showRoundQuestion(strProgression);
    const answerUser = +showAnswerUser();
    if (answerUser === answerCorrect) {
      console.log(correctAnswer);
    } else {
      console.log(`${answerUser}${' '}${wrongAnswer}${' '}${answerCorrect}\n${wrongAnswer1}${nameUser}`);
      return exit;
    }
  }
  console.log(`${congratulationsGame}, ${nameUser}!`);
  return exit;
};

export default progression;
