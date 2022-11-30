const prompt = require('prompt-sync')();
const { Player } = require('./src/player.js');
const { createRooms } = require('./src/rooms.js');

const startGame = () => {
  const player = new Player();
  const rooms = createRooms();
  let counter = 0;
  for (const room of rooms) {
    counter++;
    const choise = room.promptOptions();
    const lostHeart = room.processOption(choise);
    player.looseHeart(lostHeart);
    if (!player.isAlive()) {
      console.log('---------- Sorry, you lost the game! ----------');
      console.log(`You past throught ${counter} room(s)`);
      break;
    }
  }
  if(counter===rooms.length){
    console.log('---------- Congratulations! You won! ----------');
    console.log(`You have ${player.hearts} heart(s) left`);
    console.log(`You passed through all ${counter} room(s)`);
  }  
  promptReset();
};

const promptReset = () => {
  let userInput = prompt('Would you like to play again? [y / n] ');
  if (userInput === 'y') {
    startGame();
  } else if (userInput === 'n') {
    console.log('Bye bye!');
  } else {
    console.log('Please enter a valid answer');
    userInput = prompt('Would you like to play again? [y / n]');
  }
};

startGame();

