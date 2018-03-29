import readlineSync from 'readline-sync';

const DEFAULT_COUNT_STEP = 3;

export default (game) => {
  console.log('Welcome to the Brain Games!');
  if (game.title) {
    console.log(game.title);
  }

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);

  let step = 0;
  let result = true;

  while (step < DEFAULT_COUNT_STEP) {
    const question = game.getQuestion();
    console.log(`Question: ${question.text}`);

    const response = readlineSync.question('Your answer: ');

    if (response === question.correct) {
      console.log('Correct!');
    } else {
      console.log(`'${response}' is wrong answer ;(. Correct answer was '${question.correct}'.`);
      result = false;
      break;
    }

    step += 1;
  }

  if (result) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};
