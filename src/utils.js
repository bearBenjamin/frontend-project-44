import { question } from 'readline-sync';

// function show;

export const showGreetings = () => {
  console.log('Welcome to the Brain Games!');
};

export const showGreetingsUser = (nameUser) => {
  const greetingsUser = 'Hello, ';
  console.log(`${greetingsUser}${nameUser}!`);
};

export const showRoundQuestion = (numA, operationRound, numB) => {
  const roundQuestion = 'Question: ';
  if (numB === undefined && operationRound === undefined) {
    console.log(`${roundQuestion}${numA}`);
  } else {
    console.log(`${roundQuestion}${numA}${operationRound}${numB}`);
  }
};

export const showRoundQuestionCalc = (numA, numB, randOperation) => {
  if (randOperation === '+') {
    console.log(`${'Question: '}${numA} + ${numB}`);
  }
  if (randOperation === '-') {
    console.log(`${'Question: '}${numA} - ${numB}`);
  }
  if (randOperation === '*') {
    console.log(`${'Question: '}${numA} * ${numB}`);
  }
};

export const showCorrectAnswer = () => {
  console.log('Correct!');
};

export const showWrongAnswer = (nameUser, answerUser, expectedResponse) => {
  console.log(`${answerUser} ${'is wrong answer ;(. Correct answer was '}${expectedResponse}\n${'Let\'s try again, '}${nameUser}!`);
};

export const showCongratulationsGame = (nameUser) => {
  console.log(`Congratulations, ${nameUser}!`);
};

// function get;

export const getRandomNum = () => {
  const bottonNum = 1;
  const topNum = 100;
  const min = Math.ceil(bottonNum);
  const max = Math.floor(topNum);
  const numRandom = Math.floor(Math.random() * (max - min + 1)) + min;
  return numRandom;
};

export const getNameUser = () => {
  const nameUser = question('May I have your name? ');
  return nameUser;
};

export const getAnswerUser = () => {
  const answerUser = question('Your answer: ');
  return answerUser;
};

export const getExpectedAnswer = (numRandom) => {
  const evenOrOdd = numRandom % 2 === 0;
  const expectedResponse = evenOrOdd ? 'yes' : 'no';
  return expectedResponse;
};

export const getRandomOperation = (arrayRandOperation = ['+', '-', '*']) => {
  const randOperation = arrayRandOperation[Math.floor(Math.random() * arrayRandOperation.length)];
  return randOperation;
};

export const getAdd = (numA, numB, randOper) => {
  const addition = randOper === '+' ? numA + numB : '';
  return addition;
};

export const getSub = (numA, numB, randOper) => {
  const substraction = randOper === '-' ? numA - numB : '';
  return substraction;
};

export const getMultip = (numA, numB, randOper) => {
  const multiplication = randOper === '*' ? numA * numB : '';
  return multiplication;
};

export const getCalculationGcd = (numA, numB) => {
  let numOne = numA;
  let numTwo = numB;
  let gcdResult;
  if (numOne === numTwo) {
    gcdResult = numOne;
  } else {
    do {
      if (numOne > numTwo) {
        numOne -= numTwo;
      } else {
        numTwo -= numOne;
      }
    } while (numOne !== numTwo);
    gcdResult = numOne;
  }
  return gcdResult;
};

export const getArrayProgressionRound = (numRandom) => {
  const arrayProgression = [];
  let itemArrayProgression = numRandom;
  for (let j = 0; j < 10; j += 1) {
    itemArrayProgression += 2;
    arrayProgression.push(itemArrayProgression);
  }
  return arrayProgression;
};

export const getRandomItemArray = (arrayProgression) => {
  const itemTwoPoint = Math.floor(Math.random() * arrayProgression.length);
  return itemTwoPoint;
};

// list const

export const exit = 'exit';
