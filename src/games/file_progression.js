import runEngine from '../index.js';
import {
  getAnswerUser, showRoundQuestion,
  getRandomNum, getArrayProgressionRound, getRandomItemArray,
} from '../utils.js';

const nameGame = 'brain-progression\n';
const rules = 'What number is missing in the progression?';

const generateRound = () => {
  const numRandom = getRandomNum();
  const arrayProgression = getArrayProgressionRound(numRandom);
  const itemTwoPoint = getRandomItemArray(arrayProgression);
  const expectResp = arrayProgression[itemTwoPoint];
  arrayProgression[itemTwoPoint] = '..';
  const strProgression = arrayProgression.join(' ');
  showRoundQuestion(strProgression);
  const answerUser = +getAnswerUser();
  return [answerUser, expectResp];
};

const progression = () => {
  runEngine(nameGame, rules, generateRound);
};

export default progression;
