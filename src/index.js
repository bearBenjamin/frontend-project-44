import { question } from 'readline-sync';

// function show;

export const showGreetings = () => {
  console.log('Welcome to the Brain Games!');
};

export const showAnswerUser = () => {
  const answerUser = question('Your answer: ');
  return answerUser;
};

// function get;

export const getNameUser = () => {
  const userName = question('May I have your name? ');
  return userName;
};

export const getRandomNum = () => {
  const bottonNum = 1;
  const topNum = 100;
  const min = Math.ceil(bottonNum);
  const max = Math.floor(topNum);
  const numRandom = Math.floor(Math.random() * (max - min + 1)) + min;
  return numRandom;
};

// list const;

export const greetingsUser = 'Hello ,';

export const roundQuestion = 'Question: ';

export const correctAnswer = 'Correct!';

export const wrongAnswer = 'is wrong answer ;(. Correct answer was ';

export const wrongAnswer1 = 'Let\'s try again, ';

export const congratulationsGame = 'Congratulations';

export const exit = 'exit';
