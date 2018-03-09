import readlineSync from 'readline-sync';

export const name = () => {
  const actual = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${actual}!\n`);
  return actual;
};

export const hello = () => {
  console.log('Welcome to the Brain Games!');
};

export const rand = () => {
  const r = Math.random() * 100;
  return r - (r % 1);
};

export const randSign = () => {
  const r = Math.random() * 100;
  if (r < 33) return '+';
  if (r > 66) return '-';
  return '*';
};
