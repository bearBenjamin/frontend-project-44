import runEngine from '../index.js';
import {
  getAnswerUser, showRoundQuestion,
  getRandomNum,
} from '../utils.js';

const nameGame = 'brain-prime\n';
const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateRound = () => {
  const numRandom = getRandomNum();
  showRoundQuestion(numRandom);
  const answerUser = getAnswerUser();
  let expectResp = numRandom === 1 ? 'no' : 'yes';
  expectResp = numRandom === 2 || numRandom === 3 ? 'yes' : 'no';
  const halfNumRandom = Math.floor(numRandom / 2);
  for (let j = 2; j <= halfNumRandom; j += 1) {
    if (numRandom % j === 0) {
      expectResp = 'no';
      break;
    } else if (j === halfNumRandom) {
      expectResp = 'yes';
    }
  }
  return [answerUser, expectResp];
};

const numPr = () => {
  runEngine(nameGame, rules, generateRound);
};

export default numPr;
