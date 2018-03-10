import { cons } from 'hexlet-pairs';
import { rand, flow } from './index';

export default () => {
  const quest = 'Find the greatest common divisor of given numbers.';

  const answer = (num1, num2) => {
    let res;
    for (let i = 1; i <= num1; i += 1) {
      if (num1 % i === 0 && num2 % i === 0) res = i;
    }
    return String(res);
  };

  const gen = () => {
    const num1 = rand(100);
    const num2 = rand(100);
    return cons(`${num1} ${num2}`, answer(num1, num2));
  };

  flow(quest, gen);
};
