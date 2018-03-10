import { cons } from 'hexlet-pairs';
import { rand, flow, hello } from './index';

export default () => {
  hello();
  const question = 'Is this number prime?';

  const getAnswer = (num) => {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) return 'no';
    }
    return 'yes';
  };

  const generateNums = () => {
    const num = rand(100);
    return cons(num, getAnswer(num));
  };

  flow(question, generateNums);
};
