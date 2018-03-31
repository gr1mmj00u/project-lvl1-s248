import _ from 'lodash';
import createGame from '../';

const defaultLowerNumber = 1;
const defaultUpperNumber = 100;

const getRandomNumber = () => _.random(defaultLowerNumber, defaultUpperNumber, false);

const getGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }

  return getGcd(num2, num1 % num2);
};

export default () => {
  const game = {
    title: 'Find the greatest common divisor of given numbers.',
    getQuestion: () => {
      const number1 = getRandomNumber();
      const number2 = getRandomNumber();
      const nod = getGcd(number1, number2);

      const object = {
        text: `${number1} ${number2}`,
        correct: nod.toString(),
      };

      return object;
    },
  };
  createGame(game);
};
