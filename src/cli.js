import { question } from 'readline-sync';

const greetingAcquaintance = () => {
    const userName = question('May I have your name? ');
    console.log('Hello, ' + userName + '!');
};

export default greetingAcquaintance;