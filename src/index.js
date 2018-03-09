import readlineSync from 'readline-sync';

export const name = () => {
  const actual = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${actual}!\n`);
  return actual;
};

export const hello = () => {
  console.log('Welcome to the Brain Games!');
};

export const rand = (num) => {
  const r = Math.random() * num;
  return r - (r % 1);
};

export const randSign = () => {
  const r = Math.random() * 10;
  if (r < 3) return '+';
  if (r > 6) return '-';
  return '*';
};

export const flow = (quest, f) => {
  console.log(quest);
  const nam = name();
  let i = 0;
  while (i < 3) {
    const value = f();
    console.log(`Question: ${value('ask')}`);
    const answer = readlineSync.question('Your answer: ');
    if (value('ans') === answer) {
      console.log('Correct!\n');
      i += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${value('ans')}'.`);
      console.log(`Let's try again, ${nam}!\n`);
      i = 0;
    }
  }
  console.log(`Congratulations, ${nam}!`);
};
