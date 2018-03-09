import { cons, car, cdr } from 'hexlet-pairs';
import { rand, flow } from './index';

export default () => {
  const quest = 'Balance the given number.';

  const isBal = (a) => {
    let min = cons(Number(a[0]), 0);
    let max = cons(Number(a[0]), 0);
    for (let i = 1; i < a.length; i += 1) {
      if (Number(a[i]) < car(min)) min = cons(Number(a[i]), i);
      if (Number(a[i]) > car(max)) max = cons(Number(a[i]), i);
    }
    if (car(max) - car(min) <= 1) return a;
    if (cdr(min) > cdr(max)) {
      const m = cdr(min);
      min = cons(car(min), cdr(max));
      max = cons(car(max), m);
    }
    const b = a.substring(0, cdr(min)) + (car(min) + 1) + a.substring(cdr(min) + 1, cdr(max)) +
        (car(max) - 1) + a.substring(cdr(max) + 1, a.length);
    return isBal(b);
  };

  const right = (x) => {
    let a = isBal(x);
    for (let i = 0; i < a.length; i += 1) {
      for (let j = i + 1; j < a.length; j += 1) {
        if (Number(a[i]) > Number(a[j])) {
          a = a.substring(0, i) + a[j] + a.substring(i + 1, j) + a[i] +
            a.substring(j + 1, a.length);
        }
      }
    }
    return a;
  };

  const f = () => {
    const x = String(rand(1000));
    return str => (str === 'ask' ? x : right(x));
  };

  flow(quest, f);
};
