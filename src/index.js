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

export const showAnswerUser = () => {
  const answerUser = question('Your answer: ');
  return answerUser;
};

// function get;

export const getNameUser = () => {
  const nameUser = question('May I have your name? ');
  return nameUser;
};

export const getRandomNum = () => {
  const bottonNum = 1;
  const topNum = 100;
  const min = Math.ceil(bottonNum);
  const max = Math.floor(topNum);
  const numRandom = Math.floor(Math.random() * (max - min + 1)) + min;
  return numRandom;
};

export const getAnswer = (numRandom) => {
  const evenOrOdd = numRandom % 2 === 0;
  const expectedResponse = evenOrOdd ? 'yes' : 'no';
  return expectedResponse;
};

export const getRandomOperation = (arrayRandOperation = ['+', '-', '*']) => {
  const randOperation = arrayRandOperation[Math.floor(Math.random() * arrayRandOperation.length)];
  return randOperation;
};

export const getAnswerCalc = (numA, numB, randOperation) => {
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

export const getOperationAddition = (numA, numB, randOperation) => {
  const addition = randOperation === '+' ? numA + numB : '';
  return addition;
};

export const getOperationSubstraction = (numA, numB, randOperation) => {
  const substraction = randOperation === '-' ? numA - numB : '';
  return substraction;
};

export const getOperationMultiplication = (numA, numB, randOperation) => {
  const multiplication = randOperation === '*' ? numA * numB : '';
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

export const wrongAnswer = 'is wrong answer ;(. Correct answer was ';

export const wrongAnswer1 = 'Let\'s try again, ';

export const correctAnswer = 'Correct!';

export const congratulationsGame = 'Congratulations';
