import readlineSync from 'readline-sync';
import _ from 'lodash';

const DEFAULT_COUNT_STEP = 3;
const DEFAULT_LOWER_NUMBER = 1;
const DEFAULT_UPPER_NUMBER = 100;

export const welcomeAction = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const getRandomNumbers = (count = DEFAULT_COUNT_STEP) => {
  const randomNumbersArray = [];
  let lengthArray = count;

  while (lengthArray) {
    randomNumbersArray.push(_.random(DEFAULT_LOWER_NUMBER, DEFAULT_UPPER_NUMBER, false));
    lengthArray -= 1;
  }
  return randomNumbersArray;
};

const gameStep = (number) => {
  console.log(`Question: ${number}`);

  const response = readlineSync.question('Your answer: ');
  const correct = !(number % 2) ? 'yes' : 'no';
  let result = true;

  switch (response) {
    case 'yes':
      result = !(number % 2);
      break;
    case 'no':
      result = (number % 2);
      break;
    default:
      result = false;
  }

  if (result) {
    console.log('Correct!');
  } else {
    console.log(`'${response}' is wrong answer ;(. Correct answer was '${correct}'.`);
  }
  return result;
};

export const gameAction = (countNumbers = DEFAULT_COUNT_STEP) => {
  const randomNumbers = getRandomNumbers(countNumbers);

  let index = 0;
  for (index; index < randomNumbers.length; index += 1) {
    if (!gameStep(randomNumbers[index])) {
      return false;
    }
  }
  return true;
};
