const prompt = require('prompt-sync')();
class Room {
  constructor(name, text, question, options, outcomes) {
    this.name = name;
    this.text = text;
    this.question = question;
    this.options = options;
    this.outcomes = outcomes;
  }
  displayOptions() {
    console.log(`---------- ${this.name} ----------`);
    console.log(this.text);
    console.log(this.question);
    console.log(this.options);
  }
  promptOptions() {
    this.displayOptions();
    do {
      let choice = Number(prompt('Type [1 | 2]: '));
      if (choice === 1 || choice === 2) {
        return choice - 1;
      } else {
        console.log('Please enter valid option');
      }
    } while (true);
  }
  processOption(option) {
    this.visited = true;
    console.log(this.outcomes[option].text);
    return this.outcomes[option].looseHeart;
  }
}

const createRooms = () => {
  const rooms = [];
  rooms.push(
    new Room(
      'Dungeon room',
      'You are in a dungeon. A goblin stares at you menacingly',
      'The Goblin charges toward you, blade drawn. Do you:',
      ['1 - Attack the goblin', '2 - Run away'],
      [
        {
          text: "You parry the goblin's strike, and cleave it in two, but not before it nicks you with a hidden blade.",
          looseHeart: 1,
        },
        {
          text: 'You sprint towards the nearest exit, outpacing the goblin easily',
          looseHeart: 0,
        },
      ]
    )
  );

  rooms.push(
    new Room(
      'Corridor',
      'You pass through the exit and run down a corridor…',
      'At the end of the corridor, you find two doors and must pass through one of them. Do you:',
      ['Go through the right hand door', 'Go through the left hand door'],
      [
        {
          text: 'You fall down a 3 meter drop on the other side, slightly injuring your ankle. You climb out of the hole and into an open courtyard',
          looseHeart: 1,
        },
        {
          text: 'The door locks behind you and you are in an open courtyard.',
          looseHeart: 0,
        },
      ]
    )
  );
  rooms.push(
    new Room(
      'Courtyard',
      'You see a table with food and drink',
      'You are tired, hungry and thirsty. Do you:',
      [
        'Eat, drink and rest',
        'Ignore the table of refreshments, fearing poison and move on to the next room',
      ],
      [
        {
          text: 'You recover from your injuries and you are ready to move to the next room',
          looseHeart: 0,
        },
        {
          text: 'Your injuries and fatigue cause you to fall into a bed of hemlock. You die. Horribly. Ouch!',
          looseHeart: 3,
        },
      ]
    )
  );

  rooms.push(
    new Room(
      'Beer cellar',
      'You are now in a beer cellar. You are tempted to try the merchandise',
      'The barkeep offers you a beer. Do you:',
      ['Accept the offer', 'Decline and ask for directions to the W.C.'],
      [
        {
          text: 'One beer is never enough and you get horribly drunk, in your haze, you stagger off. Loose one heart',
          looseHeart: 1,
        },
        {
          text: 'You reach the W.C. and have a wash.',
          looseHeart: 0,
        },
      ]
    )
  );

  rooms.push(
    new Room(
      'Library',
      'You reach a library. You see the librarian, who is an orangutan, hanging around the desk.',
      "The librarian says 'OOOK?' Do you:",
      [
        'Return the book you borrowed last time you were here and apologise for being late.',
        'Borrow the book eagerly recommended by the librarian, as this is your first visit and you wish to impress',
      ],
      [
        {
          text: 'Your apology is accepted, so you live, but there is no excuse for your tardiness and you are fined 10 Splodges.',
          looseHeart: 1,
        },
        {
          text: 'You put the book in your bag and walk towards the exit',
          looseHeart: 0,
        },
      ]
    )
  );

  return rooms;
};

module.exports = { createRooms };
