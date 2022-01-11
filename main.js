const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

// defining the class 

class Field {
  constructor (hatAndHoles, field) {
    this._field = field;
    this._hatAndHoles = hatAndHoles;
  }
  // play game method
  playGame () {
    let x = 0;
    let y = 0;
    this.print(this._field);

    while (this._hatAndHoles[y][x] === pathCharacter || this._hatAndHoles[y][x] === fieldCharacter) {
      const direction = prompt("Which direction would you like to move? Please enter N for Norther, S for South, E for East, or W for West. \n");

    if (direction.toUpperCase() === 'S') {
      
    }
    }
  };
};