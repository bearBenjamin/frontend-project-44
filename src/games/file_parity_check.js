import runEngine from '../index.js';
import {
  getRandomNum, getAnswerUser, showRoundQuestion, getExpectedAnswer,
} from '../utils.js';

const nameGame = 'brain-even\n';
const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const numRandom = getRandomNum();
  showRoundQuestion(numRandom);
  const answerUser = getAnswerUser();
  const expectResp = getExpectedAnswer(numRandom);
  return [answerUser, expectResp];
};

const arbitaryNumber = () => {
  runEngine(nameGame, rules, generateRound);
};

export default arbitaryNumber;
