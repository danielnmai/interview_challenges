const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
const PROMPT = 'SET UP PHASE - Player 1 ENTER Ship Coord, Length and Direction \n (Ship Direction: 0 is horizontal, 1 is vertical ): (x, y, length, direction)> '
const PLAYER_1 = 'player1'
const PLAYER_2 = 'player2'
const player1 = new Player(PLAYER_1)
const player2 = new Player(PLAYER_2)

//Limit the total number of ships for 2 players to 4
const MAX_SHIP_NUMBER = 4

//create a 10x10 gameBoard
let gameBoard = [
['*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
['*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
['*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
['*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
['*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
['*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
['*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
['*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
['*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
['*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
]

let setUpDone = false
//SET UP FUNCTION
function setUp(input, playerName) {
  if (player1.shipCount === MAX_SHIP_NUMBER && player2.shipCount === MAX_SHIP_NUMBER) {
    setUpDone = true
    return
  }

  let array = input.split(' ');
  let x = parseInt(array[0]), y = parseInt(array[1]), length = parseInt(array[2])
  let direction = parseInt(array[3])

  if(player1.name === playerName) {
    player1.addShip(x, y, length, direction)
    console.log(player1.getAllShips)

  }
  else {
    player2.addShip(x, y, length, direction)
    console.log(player2.getAllShips)
  }
  //View Board
  viewBoard()
}

//Place ship on the board
function placeShip(direction, mark){
  if (parseInt(direction) === 0) {
    for(let i = 0; i < length; i++){
      gameBoard[x][y + i] = mark
    }
  }

  if(parseInt(direction) === 1){
    for(let i = 0; i < length; i++){
      gameBoard[x + i][y] = mark
    }
  }
}

//Create Player Object with properties of name, shipCount and getAllShips
function Player(name){
  this.name = name
  this.shipCount = 0
  this.getAllShips = {}
}

Player.prototype.addShip = function(x, y, length, direction) {
  if(this.name === PLAYER_1){
    this.getAllShips['ship' + this.shipCount] = {}
    for(let i = 0; i < length; i++){
      let ar = [x, y + i]
      this.getAllShips['ship' + this.shipCount][ar.toString()] = 'X'
    }
    //Place ship on the board
    if (direction === 0) {
      for(let i = 0; i < length; i++){
        gameBoard[x][y + i] = 'X'
      }
    }

    if(direction === 1){
      for(let i = 0; i < length; i++){
        gameBoard[x + i][y] = 'X'
      }
    }
  }
  if(this.name === PLAYER_2){
    this.getAllShips['ship' + this.shipCount] = {}
    for(let i = 0; i < length; i++){
      let ar = [x, y + i]
      this.getAllShips['ship' + this.shipCount][ar.toString()] = 'O'
    }
    //Place ship on the board
    if (direction === 0) {
      for(let i = 0; i < length; i++){
        gameBoard[x][y + i] = 'O'
      }
    }

    if(direction === 1){
      for(let i = 0; i < length; i++){
        gameBoard[x + i][y] = 'O'
      }
    }
  }
  this.shipCount ++
}
Player.prototype.getShip = function(id) {
  return this.getAllShips['ship' + id]
}
// ----------------------------------------------

function viewBoard(){
  console.log('  0 1 2 3 4 5 6 7 8 9')
  for(let i = 0; i < gameBoard.length; i++){
      console.log(i + ' ' + gameBoard[i].join(' '))
    }
}
let totalShips = 0;
function promptInput(prompt, handler) {
  //SET UP PHASE
  if (totalShips < MAX_SHIP_NUMBER) {
    rl.question(prompt, input => {
      if (handler(input) !== false) {
        if (prompt.includes('Player 1')) {
          setUp(input, PLAYER_1)
          totalShips++
          promptInput(PROMPT.replace('Player 1', 'Player 2'), handler);
        }
        else {
          setUp(input, PLAYER_2)
          totalShips++
          promptInput(PROMPT, handler);
        }
      } else {
        rl.close();
      }
    });
  }
  //FIRING PHASE
  else {
    console.log('FIRING PHASE!')
  }
}

promptInput(PROMPT, input => {
  switch (input) {
    case 'setup':
      console.log('setup')
      break;
    case 'exit':
      console.log('Bye!');
      return false;
  }
});
