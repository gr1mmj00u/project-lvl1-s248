import _ from 'lodash';
import createGame from '../';

const defaultLowerNumber = 1;
const defaultUpperNumber = 100;

const getRandomNumber = () => _.random(defaultLowerNumber, defaultUpperNumber, false);

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
