import { cons } from 'hexlet-pairs';
import { rand, flow, hello, getAnswer } from './index';

export default () => {
  hello();
  const question = 'Answer "yes" if number even otherwise answer "no".';

  const isEven = num => (num % 2 === 0);

  const generateNums = () => {
    const num = rand(100);
    return cons(num, getAnswer(isEven(num)));
  };

  flow(question, generateNums);
};
