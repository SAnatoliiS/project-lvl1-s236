import { cons } from 'hexlet-pairs';
import { rand, flow, hello, getAnswer } from './index';

export default () => {
  hello();
  const question = 'Is this number prime?';

  const isPrime = (num) => {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const generateNums = () => {
    const num = rand(100);
    return cons(num, getAnswer(isPrime(num)));
  };

  flow(question, generateNums);
};
