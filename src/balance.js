import { cons } from 'hexlet-pairs';
import { rand, flow, hello } from './index';

export default () => {
  hello();
  const question = 'Balance the given number.';

  const sumDigitals = (num) => {
    const strNum = String(num);
    let sum = 0;
    for (let i = 0; i < strNum.length; i += 1) {
      sum += Number(strNum[i]);
    }
    return sum;
  };

  const getAnswer = (num) => {
    const iter = (sum, numOfDigs, acc) => {
      if (numOfDigs === 0) return acc;
      const digit = (sum / numOfDigs) - ((sum / numOfDigs) % 1);
      const newAcc = acc + (digit * (10 ** (numOfDigs - 1)));
      return iter(sum - digit, numOfDigs - 1, newAcc);
    };
    return iter(sumDigitals(num), String(num).length, 0);
  };

  const generateNums = () => {
    const num = rand(1000);
    return cons(num, getAnswer(num));
  };
  flow(question, generateNums);
};
