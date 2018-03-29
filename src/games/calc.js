import _ from 'lodash';
import createGame from '../';

const DEFAULT_LOWER_NUMBER = 1;
const DEFAULT_UPPER_NUMBER = 100;

const getRandomNumber = () => _.random(DEFAULT_LOWER_NUMBER, DEFAULT_UPPER_NUMBER, false);

const getRandomOperation = () => {
  switch (_.random(1, 3, false)) {
    case 1:
      return '+';
    case 2:
      return '-';
    default:
      return '*';
  }
};

const getCorrect = (number1, number2, operation) => {
  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    default:
      return number1 * number2;
  }
};

export default () => {
  const game = {
    title: 'What is the result of the expression?',
    getQuestion: () => {
      const number1 = getRandomNumber();
      const number2 = getRandomNumber();
      const operation = getRandomOperation();

      const object = {
        text: `${number1} ${operation} ${number2}`,
        correct: getCorrect(number1, number2, operation).toString(),
      };

      return object;
    },
  };
  createGame(game);
};
