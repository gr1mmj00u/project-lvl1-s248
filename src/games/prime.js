import _ from 'lodash';
import createGame from '../';

const defLowerNum = 1;
const defUpperNum = 100;

const getRandomNumber = (lower = defLowerNum, upper = defUpperNum) => _.random(lower, upper, false);

const isPrime = (num) => {
  if (num < 1) {
    return false;
  }

  for (let i = 2; i <= num; i += 1) {
    if (num % i === 0 && i !== num) {
      return false;
    }
  }

  return true;
};

export default () => {
  const game = {
    title: 'Is this number prime?',
    getQuestion: () => {
      const number = getRandomNumber();

      const object = {
        text: `${number}`,
        correct: isPrime(number) ? 'yes' : 'no',
      };

      return object;
    },
  };
  createGame(game);
};
