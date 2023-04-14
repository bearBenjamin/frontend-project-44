import {
  showGreetings, showAnswerUser,
  getUserName, getRandomNum,
  greetingsUser, roundQuestion, correctAnswer, exit,
  wrongAnswer, wrongAnswer1, congratulationsGame,
} from './index.js';

const progression = () => {
  showGreetings();
  const nameUser = getUserName();
  console.log(`${greetingsUser}${nameUser}!`);
  console.log('Whan number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const strArrayProgression = [];
    const numRandom = getRandomNum();
    let itemArrayProgression = numRandom;
    for (let j = 0; j < 10; j += 1) {
      itemArrayProgression += 2;
      strArrayProgression.push(itemArrayProgression);
    }
    const ranTwoPoint = Math.floor(Math.random() * 10);
    const answerCorrect = strArrayProgression[ranTwoPoint];
    strArrayProgression[ranTwoPoint] = '..';
    const strProgression = strArrayProgression.join('  ');
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
