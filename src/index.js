import {
  showGreetings, showGreetingsUser, showCorrectAnswer,
  showWrongAnswer, showCongratulationsGame, getNameUser, exit,
} from './utils.js';

const roundsCount = 3;

// правкa после первой проверки;

const runEngine = (nameGame, rules, generateRound) => {
  console.log(nameGame);
  showGreetings();
  const nameUser = getNameUser();
  showGreetingsUser(nameUser);
  console.log(rules);
  for (let i = 1; i <= roundsCount; i += 1) {
    const [answerUser, expectResp] = generateRound();
    if (expectResp === answerUser) {
      showCorrectAnswer();
    } else {
      showWrongAnswer(nameUser, answerUser, expectResp);
      return exit;
    }
  }
  showCongratulationsGame(nameUser);
  return exit;
};

export default runEngine;
