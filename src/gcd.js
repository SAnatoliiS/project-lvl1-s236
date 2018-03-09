import { rand, flow } from './index';

export default () => {
  const quest = 'Find the greatest common divisor of given numbers.';

  const right = (x, y) => {
    let d;
    for (let i = 1; i <= x; i += 1) {
      if (x % i === 0 && y % i === 0) d = i;
    }
    return String(d);
  };

  const f = () => {
    const x = rand(100);
    const y = rand(100);
    return str => (str === 'ask' ? `${x} ${y}` : right(x, y));
  };

  flow(quest, f);
};
