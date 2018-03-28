#!/usr/bin/env node

import { welcomeAction, gameAction } from '..';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');

const playerName = welcomeAction();

const result = gameAction();

if (result) {
  console.log(`Congratulations, ${playerName}!`);
} else {
  console.log(`Let's try again, ${playerName}!`);
}
