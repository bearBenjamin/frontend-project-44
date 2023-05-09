import runEngine from '../index.js';
import { getRandomNum } from '../utils.js';

const nameGame = 'brain-calc\n';
const rules = 'What is the result of the expression?';
const getRandomOperation = (arrayRandOperation = ['+', '-', '*']) => {
  const randOperation = arrayRandOperation[Math.floor(Math.random() * arrayRandOperation.length)];
  return randOperation;
};

const generateRound = () => {
  const numA = getRandomNum();
  const numB = getRandomNum();
  const randOper = getRandomOperation();
  const questionRound = `${'Question: '}${numA}${randOper}${numB}`;
  const add = randOper === '+' ? numA + numB : null;
  const sub = randOper === '-' ? numA - numB : null;
  const multip = randOper === '*' ? numA * numB : null;
  const expectedAnswer = add || sub || multip;
  return [questionRound, String(expectedAnswer)];
};
const calculator = () => {
  runEngine(nameGame, rules, generateRound);
};

export default calculator;
