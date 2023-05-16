import runEngine from '../index.js';
import getRandomNum from '../utils.js';

const rules = 'What number is missing in the progression?';

const generateProgression = (num, lengthProg, stepProg, itemTwoPoint) => {
  const arrayProgression = [];
  let itemArrayProgression = num;
  for (let j = 0; j < lengthProg; j += 1) {
    itemArrayProgression += stepProg;
    arrayProgression.push(itemArrayProgression);
  }
  const answer = String(arrayProgression[itemTwoPoint]);
  arrayProgression[itemTwoPoint] = '..';
  const strProgression = arrayProgression.join(' ');
  return [answer, strProgression];
};

const generateRound = () => {
  const num = getRandomNum(0, 100);
  const lengthProg = 10;
  const stepProg = 2;
  const itemTwoPoint = Math.floor(Math.random() * lengthProg);
  const [answer, strProgression] = generateProgression(num, lengthProg, stepProg, itemTwoPoint);
  const expectedAnswer = answer;
  const questionRound = `${strProgression}`;
  return [questionRound, expectedAnswer];
};

const progression = () => {
  runEngine(rules, generateRound);
};

export default progression;
