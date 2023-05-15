import runEngine from '../index.js';
import getRandomNum from '../utils.js';

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

const calculation = (num1, num2, operator) => {
  switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default:
      throw new Error(`Operator ${operator} - is incorrect!`);
  }
};

const generateRound = () => {
  const numA = getRandomNum(0, 100);
  const numB = getRandomNum(0, 100);
  const operator = getRandomOperator();
  const questionRound = `${'Question: '}${numA}${operator}${numB}`;
  const expectedAnswer = calculation(numA, numB, operator);
  return [questionRound, String(expectedAnswer)];
};
const calculator = () => {
  runEngine(rules, generateRound);
};

export default calculator;
