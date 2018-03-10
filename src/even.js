import { cons } from 'hexlet-pairs';
import { rand, flow } from './index';

export default () => {
  const quest = 'Answer "yes" if number even otherwise answer "no".';

  const answer = (num) => {
    if (num % 2 === 0) return 'yes';
    return 'no';
  };

  const gen = () => {
    const num = rand(100);
    return cons(num, answer(num));
  };

  flow(quest, gen);
};
