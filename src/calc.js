import { cons } from 'hexlet-pairs';
import { randSign, rand, flow } from './index';

export default () => {
  const quest = 'What is the result of the expression?';

  const answer = (num1, sign, num2) => {
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

  const gen = () => {
    const num1 = rand(10);
    const num2 = rand(10);
    const sign = randSign();
    return cons(`${num1} ${sign} ${num2}`, answer(num1, sign, num2));
  };

  flow(quest, gen);
};
