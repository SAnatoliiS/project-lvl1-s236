import readlineSync from 'readline-sync';
import { name, rand } from './index';

const isEven = (x) => {
  if (x % 2 === 0) return 'yes';
  return 'no';
};

export default () => {
  console.log('Answer "yes" if number even otherwise answer "no".');
  const nam = name();
  let i = 0;
  while (i < 3) {
    const r = rand();
    console.log(`Question: ${r}`);
    const answer = readlineSync.question('Your answer: ');
    if (isEven(r) === answer) {
      console.log('Correct!\n');
      i += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven(r)}'.`);
      console.log(`Let's try again, ${nam}!\n`);
      i = 0;
    }
  }
  console.log(`Congratulations, ${nam}!`);
};
