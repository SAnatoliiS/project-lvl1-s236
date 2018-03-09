import { rand, flow } from './index';

export default () => {
  const quest = 'What is the result of the expression?';

  const isEven = (x) => {
    if (x % 2 === 0) return 'yes';
    return 'no';
  };

  const f = () => {
    const x = rand(100);
    return str => (str === 'ask' ? x : isEven(x));
  };

  flow(quest, f);
};
