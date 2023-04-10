import { question } from 'readline-sync';

export const showGreetings = () => {
  console.log('Welcome to the Brain Games!');
};

export const getUserName = () => {
  const userName = question('May I have your name? ');
  return userName;
};

export const showGreetingsUser = () => {
  const greetingsUser = 'Hello ,';
  return greetingsUser;
};

export const getRandomNum = () => {
  const bottonNum = 1;
  const topNum = 100;
  const min = Math.ceil(bottonNum);
  const max = Math.floor(topNum);
  const numRandom = Math.floor(Math.random() * (max - min + 1)) + min;
  return numRandom;
};

export const showRoundQuestion = () => {
  const roundQuestion = 'Question: ';
  return roundQuestion;
};

export const showAnswerUser = () => {
  const answerUser = question('Your answer: ');
  return answerUser;
};

export const showCorrectAnswer = () => {
  const correctAnswer = 'Correct';
  return correctAnswer;
};

export const showCongratulations = () => {
  const congratulationsGame = 'Congratulations';
  return congratulationsGame;
};
