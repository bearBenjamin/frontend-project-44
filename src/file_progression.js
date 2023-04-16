import {
  showGreetings, showAnswerUser,
  getNameUser, getRandomNum,
  greetingsUser, roundQuestion, correctAnswer, exit,
  wrongAnswer, wrongAnswer1, congratulationsGame,
} from './index.js';

const progression = () => {
  showGreetings();
  const nameUser = getNameUser();
  console.log(`${greetingsUser}${nameUser}!`);
  console.log('Whan number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const arrayProgression = [];
    const numRandom = getRandomNum();
    let itemArrayProgression = numRandom;
    for (let j = 0; j < 10; j += 1) {
      itemArrayProgression += 2;
      arrayProgression.push(itemArrayProgression);
    }
    const ranTwoPoint = Math.floor(Math.random() * arrayProgression.length);
    const answerCorrect = arrayProgression[ranTwoPoint];
    arrayProgression[ranTwoPoint] = '..';
    const strProgression = arrayProgression.join('  ');
    console.log(`${roundQuestion}${strProgression}`);
    const answerUser = +showAnswerUser();
    if (answerUser === answerCorrect) {
      console.log(correctAnswer);
    } else {
      console.log(`${answerUser}${' '}${wrongAnswer}${' '}${answerCorrect}\n${wrongAnswer1}`);
      return exit;
    }
  }
  console.log(`${congratulationsGame}, ${nameUser}!`);
  return exit;
};

export default progression;
