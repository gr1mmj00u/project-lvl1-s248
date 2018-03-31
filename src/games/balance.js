import _ from 'lodash';
import createGame from '../';

const defaultLowerNumber = 10;
const defaultUpperNumber = 10000;

const getRandomNumber = () => _.random(defaultLowerNumber, defaultUpperNumber, false);

const getBalanceNumber = (num) => {
  const numArr = Array.from(num.toString()).map(item => Number(item));
  const sum = numArr.reduce((acc, e) => acc + e, 0);
  const whole = Math.trunc(sum / numArr.length);
  const rest = sum % numArr.length;

  let result = [];
  let count = rest;

  result = numArr.map(() => {
    if (count) {
      count -= 1;
      return whole + 1;
    }
    return whole;
  });

  // for (let i = 0; i < numArr.length; i += 1) {
  //   if (count) {
  //     result.push(whole + 1);
  //     count -= 1;
  //   } else {
  //     result.push(whole);
  //   }
  // }
  return result.reverse().join('');
};

export default () => {
  const game = {
    title: 'What is the result of the expression?',
    getQuestion: () => {
      const number = getRandomNumber();
      const object = {
        text: `${number}`,
        correct: getBalanceNumber(number),
      };

      return object;
    },
  };
  createGame(game);
};
