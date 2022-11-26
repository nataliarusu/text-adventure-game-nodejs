
const rooms = {
  1: {
    text: 'You are in a dungeon. A goblin stares at you menacingly',
    question: 'The Goblin charges toward you, blade drawn. Do you:',
    options: ['Attack the goblin', 'Run away'],
    outcomes: [
      {
        text: "You parry the goblin's strike, and cleave it in two, but not before it nicks you with a hidden blade. Loose one heart",
        looseHeart: true,
        looseAllHearts: false,
      },
      {
        text: 'You sprint towards the nearest exit, outpacing the goblin easily',
        looseHeart: false,
        looseAllHearts: false,
      },
    ],
    visited: false,
  },
  2: {
    text: 'You pass through the exit and run down a corridor…',
    question:
      'At the end of the corridor, you find two doors and must pass through one of them. Do you:',
    options: [
      'Go through the right hand door',
      'Go through the left hand door',
    ],
    outcomes: [
      {
        text: 'You fall down a 3 meter drop on the other side, slightly injuring your ankle. You climb out of the hole and into an open courtyard. Loose one heart',
        looseHeart: true,
        looseAllHearts: false,
      },
      {
        text: 'The door locks behind you and you are in an open courtyard.',
        looseHeart: false,
        looseAllHearts: false,
      },
    ],
    visited: false,
  },
  3: {
    text: 'You see a table with food and drink',
    question: 'You are tired, hungry and thirsty. Do you:',
    options: [
      'Eat, drink and rest',
      'Ignore the table of refreshments, fearing poison and move on to the next room',
    ],
    outcomes: [
      {
        text: 'You recover from your injuries and you are ready to move to the next room',
        looseHeart: false,
        looseAllHearts: false,
      },
      {
        text: 'Your injuries and fatigue cause you to fall into a bed of hemlock. You die. Horribly. Ouch! Loose all hearts',
        looseHeart: true, //all hearts
        looseAllHearts: true,
      },
    ],
    visited: false,
  },
  4: {
    text: 'You are now in a beer cellar. You are tempted to try the merchandise',
    question: 'The barkeep offers you a beer. Do you:',
    options: ['Accept the offer', 'Decline and ask for directions to the W.C.'],
    outcomes: [
      {
        text: 'One beer is never enough and you get horribly drunk, in your haze, you stagger off. Loose one heart',
        looseHeart: true,
        looseAllHearts: false,
      },
      {
        text: 'You reach the W.C. and have a wash.',
        looseHeart: false,
        looseAllHearts: false,
      },
    ],
    visited: false,
  },
  5: {
    text: ' You reach a library. You see the librarian, who is an orangutan, hanging around the desk.',
    question: "The librarian says 'OOOK?' Do you:",
    options: [
      'Return the book you borrowed last time you were here and apologise for being late.',
      'Borrow the book eagerly recommended by the librarian, as this is your first visit and you wish to impress',
    ],
    outcomes: [
      {
        text: 'Your apology is accepted, so you live, but there is no excuse for your tardiness and you are fined 10 Splodges. Loose one heart',
        looseHeart: true,
        looseAllHearts: false,
      },
      {
        text: 'You put the book in your bag and walk towards the exit',
        looseHeart: false,
        looseAllHearts: false,
      },
    ],
    visited: false,
  },
};

module.exports = { rooms };
