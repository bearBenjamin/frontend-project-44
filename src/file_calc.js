import { question } from 'readline-sync';

// eslint-disable-next-line consistent-return
const calculator = () => {
  console.log('Welcome to the Brain Games!');
  const userName = question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');
  let counter = 1;
  const result = 'exit';
  while (counter <= 3) {
    const min = Math.ceil(1);
    const max = Math.floor(100);
    const numberRandom1 = Math.floor(Math.random() * (max - min + 1)) + min;
    const numberRandom2 = Math.floor(Math.random() * (max - min + 1)) + min;
    const arrayRandOperation = ['+', '-', '*'];
    const randOperation = arrayRandOperation[Math.floor(Math.random() * arrayRandOperation.length)];
    if (randOperation === '+') {
      console.log(`${'Question: '}${numberRandom1} + ${numberRandom2}`);
      const resultUser = question('Your answer: ');
      const sum = numberRandom1 + numberRandom2;
      if (Number(resultUser) === sum) {
        console.log('Correct!');
      } else {
        console.log(`'${resultUser}' ${'is wrong answer ;(. Correct answer was '}'${sum}'${'\nLet\'s try again, '}${userName}`);
        return result;
      }
    }
    if (randOperation === '-') {
      console.log(`${'Question: '}${numberRandom1} - ${numberRandom2}`);
      const resultUser = question('Your asnwer: ');
      const sub = numberRandom1 - numberRandom2;
      if (Number(resultUser) === sub) {
        console.log('Correct!');
      } else {
        console.log(`'${resultUser}' ${'is wrong answer ;(. Correct answer was '}'${sub}'${'\nLet\'s try again, '}${userName}`);
        return result;
      }
    }
    if (randOperation === '*') {
      console.log(`${'Question: '}${numberRandom1} * ${numberRandom2}`);
      const resultUser = question('Your asnwer: ');
      const multip = numberRandom1 * numberRandom2;
      if (Number(resultUser) === multip) {
        console.log('Correct!');
      } else {
        console.log(`'${resultUser}' ${'is wrong answer ;(. Correct answer was '}'${multip}'${'\nLet\'s try again, '}${userName}`);
        return result;
      }
    }
    counter += 1;
  }
  console.log(`${'Congratulations'}, ${userName}!`);
};

export default calculator;
