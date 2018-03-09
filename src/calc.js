import { randSign, rand, flow } from './index';

export default () => {
  const quest = 'What is the result of the expression?';

  const right = (x, sign, y) => {
    switch (sign) {
      case '+':
        return String(x + y);
      case '-':
        return String(x - y);
      case '*':
        return String(x * y);
      default:
        return 0;
    }
  };

  const f = () => {
    const x = rand();
    const y = rand();
    const sign = randSign();
    return str => (str === 'ask' ? `${x} ${sign} ${y}` : right(x, sign, y));
  };

  flow(quest, f);
};
