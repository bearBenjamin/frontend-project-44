import runEngine from '../index.js';
import getRandomNum from '../utils.js';

const rules = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['-', '*', '+'];
  return operators[getRandomNum(0, operators.length - 1)];
};

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
  const questionRound = `${numA}${' '}${operator}${' '}${numB}`;
  const expectedAnswer = String(calculation(numA, numB, operator));
  return [questionRound, expectedAnswer];
};

const calculator = () => {
  runEngine(rules, generateRound);
};

export default calculator;
