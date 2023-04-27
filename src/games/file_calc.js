import runEngine from '../index.js';
import {
  showRoundQuestionCalc, getAnswerUser,
  getRandomNum, getRandomOperation,
  getAdd, getSub, getMultip,
} from '../utils.js';

const nameGame = 'brain-calc\n';
const rules = 'What is the result of the expression?';

const generateRound = () => {
  const A = getRandomNum();
  const B = getRandomNum();
  const randOper = getRandomOperation();
  showRoundQuestionCalc(A, B, randOper);
  const answerUser = +getAnswerUser();
  const expectResp = getAdd(A, B, randOper) || getSub(A, B, randOper) || getMultip(A, B, randOper);
  return [answerUser, expectResp];
};

const calculator = () => {
  runEngine(nameGame, rules, generateRound);
};

export default calculator;
