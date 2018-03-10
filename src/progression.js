import { cons } from 'hexlet-pairs';
import { rand, flow, hello } from './index';

export default () => {
  hello();
  const question = 'What number is missing in this progression?';

  const getAnswer = (start, step, hideNum) => start + (step * hideNum);

  const generateProgression = (start, step, hideNum) => {
    let prog = '';
    for (let i = 0; i < 10; i += 1) {
      if (i === hideNum) prog += '..';
      else prog += `${start + (step * i)}`;
      if (i < 9) prog += ' ';
    }
    return prog;
  };

  const generateNums = () => {
    const start = rand(100);
    const step = rand(10);
    const hideNum = rand(10);
    return cons(generateProgression(start, step, hideNum), getAnswer(start, step, hideNum));
  };

  flow(question, generateNums);
};
