import { cons } from 'hexlet-pairs';
import { randSign, rand, flow, hello } from './index';

export default () => {
  hello();
  const question = 'What is the result of the expression?';

  const getAnswer = (num1, sign, num2) => {
    switch (sign) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      default:
        return 0;
    }
  };

  const generateNums = () => {
    const num1 = rand(10);
    const num2 = rand(10);
    const sign = randSign();
    return cons(`${num1} ${sign} ${num2}`, getAnswer(num1, sign, num2));
  };

  flow(question, generateNums);
};
