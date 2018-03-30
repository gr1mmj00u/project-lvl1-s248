import _ from 'lodash';
import createGame from '../';

const defaultLowerNumber = 1;
const defaultUpperNumber = 100;

const getRandomNumber = () => _.random(defaultLowerNumber, defaultUpperNumber, false);

const getNod = (num1, num2) => {
  const [larger, less] = (num1 > num2) ? [num1, num2] : [num2, num1];
  const rest = larger % less;

  if (rest === 0) {
    return less;
  }

  return getNod(less, rest);
};

export default () => {
  const game = {
    title: 'Find the greatest common divisor of given numbers.',
    getQuestion: () => {
      const number1 = getRandomNumber();
      const number2 = getRandomNumber();
      const nod = getNod(number1, number2);

      const object = {
        text: `${number1} ${number2}`,
        correct: nod.toString(),
      };

      return object;
    },
  };
  createGame(game);
};
