import _ from 'lodash';
import createGame from '../';

const defLowerNum = 2;
const defUpperNum = 10;
const defLengthProgression = 10;

const getRandomNumber = (lower = defLowerNum, upper = defUpperNum) => _.random(lower, upper, false);

const getProgression = (start, num) => {
  const result = [];
  result.push(start);
  for (let i = 1; i < defLengthProgression; i += 1) {
    result.push(result[i - 1] + num);
  }
  return result;
};

const getText = (arr, index) => {
  const result = arr;
  result[index] = '..';
  return result.join(' ');
};

export default () => {
  const game = {
    title: 'What is the result of the expression?',
    getQuestion: () => {
      const number = getRandomNumber();
      const startNumber = getRandomNumber(1, 100);
      const progression = getProgression(startNumber, number);
      const index = getRandomNumber(0, 9);
      const correct = progression[index].toString();
      const text = getText(progression, index);

      const object = {
        text,
        correct,
      };

      return object;
    },
  };
  createGame(game);
};
