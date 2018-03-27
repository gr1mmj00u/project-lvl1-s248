import readlineSync from 'readline-sync';

const haveYouName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  return;
}

export default haveYouName;
