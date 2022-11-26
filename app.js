const prompt = require('prompt-sync')();
const { Player } = require('./src/player.js');

const original_rooms = require("./src/rooms.js").rooms;//{rooms:{}}



const startGame = () => {
  const player = new Player();
  const rooms = structuredClone(original_rooms);//clone rooms
  
  console.log(`${rooms['1'].text}\n`, '');
  const choice = prompt(`${rooms['1'].question}`, '\n');

  console.log('you entered ' + Number(choice + 1));
 
};

startGame()
//
//
