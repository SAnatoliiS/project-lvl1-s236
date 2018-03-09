import readlineSync from 'readline-sync';
import { name, randSign, rand } from './index';


const right = (x, sign, y) => {
  switch (sign) {
    case '+':
      return String(x + y);
    case '-':
      return String(x - y);
    case '*':
      return String(x * y);
    default:
      return 0;
  }
};

export default () => {
  console.log('What is the result of the expression?');
  const nam = name();
  let i = 0;
  while (i < 3) {
    const x = rand();
    const y = rand();
    const sign = randSign();
    console.log(`Question: ${x} ${sign} ${y}`);
    const answer = readlineSync.question('Your answer: ');
    if (right(x, sign, y) === answer) {
      console.log('Correct!\n');
      i += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${right(x, sign, y)}'.`);
      console.log(`Let's try again, ${nam}!\n`);
      i = 0;
    }
  }
  console.log(`Congratulations, ${nam}!`);
};
