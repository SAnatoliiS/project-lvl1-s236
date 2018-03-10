import { cons } from 'hexlet-pairs';
import { rand, flow, hello } from './index';

export default () => {
  hello();
  const question = 'Answer "yes" if number even otherwise answer "no".';

  const getAnswer = (num) => {
    if (num % 2 === 0) return 'yes';
    return 'no';
  };

  const generateNums = () => {
    const num = rand(100);
    return cons(num, getAnswer(num));
  };

  flow(question, generateNums);
};
