import runEngine from '../index.js';
import getRandomNum from '../utils.js';

const rules = 'What number is missing in the progression?';

const generateProgression = (num, lengthProg, stepProg) => {
  const arrayProgression = [];
  let itemArrayProgression = num;
  for (let j = 0; j < lengthProg; j += 1) {
    itemArrayProgression += stepProg;
    arrayProgression.push(itemArrayProgression);
  }
  return arrayProgression;
};

const generateRound = () => {
  const num = getRandomNum(0, 100);
  const lengthProg = getRandomNum(5, 10);
  const stepProg = getRandomNum(0, 5);
  const itemTwoPoint = getRandomNum(0, lengthProg - 1);
  const arrayProgression = generateProgression(num, lengthProg, stepProg);
  const expectedAnswer = String(arrayProgression[itemTwoPoint]);
  arrayProgression[itemTwoPoint] = '..';
  const strProgression = arrayProgression.join(' ');
  const questionRound = `${strProgression}`;
  return [questionRound, expectedAnswer];
};

const progression = () => {
  runEngine(rules, generateRound);
};

export default progression;
