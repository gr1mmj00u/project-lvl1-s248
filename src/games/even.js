import _ from 'lodash';
import createGame from '../';

const DEFAULT_LOWER_NUMBER = 1;
const DEFAULT_UPPER_NUMBER = 100;

const getRandomNumber = () => _.random(DEFAULT_LOWER_NUMBER, DEFAULT_UPPER_NUMBER, false);

const getCorrect = (value) => {
  const number = value;
  return !(number % 2) ? 'yes' : 'no';
};

export default () => {
  const game = {
    title: 'Answer "yes" if number even otherwise answer "no".',
    getQuestion: () => {
      const number = getRandomNumber();
      const object = {
        text: `${number}`,
        correct: getCorrect(number),
      };

      return object;
    },
  };
  createGame(game);
};
