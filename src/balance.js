import { cons } from 'hexlet-pairs';
import { rand, flow } from './index';

export default () => {
  const quest = 'Balance the given number.';

  const sumDig = (num) => {
    const strNum = String(num);
    let sum = 0;
    for (let i = 0; i < strNum.length; i += 1) {
      sum += Number(strNum[i]);
    }
    return sum;
  };

  const answer = (num) => {
    const iter = (sum, numOfDigs, acc) => {
      if (numOfDigs === 0) return acc;
      const digit = (sum / numOfDigs) - ((sum / numOfDigs) % 1);
      return iter(sum - digit, numOfDigs - 1, acc + (digit * (10 ** (numOfDigs - 1))));
    };
    return iter(sumDig(num), String(num).length, 0);
  };

  const gen = () => {
    const num = rand(1000);
    return cons(num, answer(num));
  };

  flow(quest, gen);
};
