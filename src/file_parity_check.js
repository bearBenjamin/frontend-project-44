import { question } from 'readline-sync';

// eslint-disable-next-line consistent-return
const arbitaryNumber = () => {
  console.log('Welcome to the Brain Games!');
  const userName = question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let counter = 1;
  const result = 'exit';
  while (counter <= 3) {
    const min = Math.ceil(1);
    const max = Math.floor(1000);
    const numberRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(`${'Question: '}${numberRandom}`);
    const yourAnswer = question('Your answer: ');
    if ((numberRandom % 2 === 0 && yourAnswer === 'yes') || (numberRandom % 2 !== 0 && yourAnswer === 'no')) {
      console.log('Correct!');
    } else if (numberRandom % 2 === 0 && yourAnswer !== 'yes') {
      console.log(`${'\'yes\' is wrong answer ;(. Correct answer was \'no\'.\nLet\'s try again, '}${userName}`);
      return result;
    } else if (numberRandom % 2 !== 0 && yourAnswer !== 'no') {
      console.log(`${'\'no\' is wrong answer ;(. Correct answer was \'yes\'.\nLet\'s try again, '}${userName}`);
      return result;
    }
    counter += 1;
  }
  console.log(`${'Congratulations'}, ${userName}!`);
};

export default arbitaryNumber;
