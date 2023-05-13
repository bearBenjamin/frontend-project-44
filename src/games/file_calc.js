import runEngine from '../index.js';
import { getRandomNum } from '../utils.js';

// const nameGame = 'brain-calc\n';
const rules = 'What is the result of the expression?';
const getRandomOperator = () => {
  const operators = ['-', '*', '+'];
  return operators[getRandomNum(0, operators.length - 1)];
};

/* const showRoundQuestionCalc = (numA, numB, randOperation) => {
  let questionRound;
  if (randOperation === '+') {
    questionRound = `${'Question: '}${numA} + ${numB}`;
  }
  if (randOperation === '-') {
    questionRound = `${'Question: '}${numA} - ${numB}`;
  }
  if (randOperation === '*') {
    questionRound = `${'Question: '}${numA} * ${numB}`;
  }
  return questionRound;
}; */

const generateRound = () => {
  const numA = getRandomNum(0, 100);
  const numB = getRandomNum(0, 100);
  const operator = getRandomOperator();
  const questionRound = `${numA}' ' ${operator}' ' ${numB}`;
  const add = operator === '+' ? numA + numB : null;
  const sub = operator === '-' ? numA - numB : null;
  const multip = operator === '*' ? numA * numB : null;
  const expectedAnswer = add || sub || multip;
  return [questionRound, String(expectedAnswer)];
};
const calculator = () => {
  runEngine(rules, generateRound);
};

export default calculator;
