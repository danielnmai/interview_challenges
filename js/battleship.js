const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
const PROMPT = 'Player 1 ENTER Ship Coord, Length and Direction \n (Ship Direction: 0 is horizontal, 1 is vertical ): (x, y, length, direction)> '
const INVALID_PROMPT = '---INVALID SET UP. PLEASE ENTER SHIP COORDINATES AGAIN.---'
const PLAYER_1 = 'player1'
const PLAYER_2 = 'player2'
const player1 = new Player(PLAYER_1)
const player2 = new Player(PLAYER_2)

//Limit the total number of ships for 2 players to 4
const MAX_SHIP_NUMBER = 6

//Specify max ship length and min ship length
const MAX_SHIP_LENGTH = 4, MIN_SHIP_LENGTH = 2


//create a 10x10 player1Board
let player1Board = [
['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
]
let player2Board = [
['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
]

//SET UP FUNCTION
function setUp(input, playerName) {
  //Get input fields - x, y, length and direction
  let array = input.split(' ');
  let x = parseInt(array[0]), y = parseInt(array[1]), length = parseInt(array[2])
  let direction = parseInt(array[3])
  let isValidSetUp = true

  //Check if input is valid before proceeding
  checkValidSetUp()

  if(isValidSetUp){
    if(player1.name === playerName) {
      player1.addShip(x, y, length, direction)
      player1.viewBoard()
      player1.fire(x, y)
    }
    else {
      player2.addShip(x, y, length, direction)
      player2.viewBoard()
      player2.fire(x, y)
    }
  }

  function checkValidSetUp(){
    //Coordinates start from 0 to gameBoard length - 1
    if(x < 0 || x >= player1Board.length || y < 0 || y >= player1Board.length) {
      isValidSetUp = false
      console.log("Coordinates are out of bound.")
    }
    //Ship length must be between 2 and 4
    else if (length < MIN_SHIP_LENGTH || length > MAX_SHIP_LENGTH){
      isValidSetUp = false
      console.log('Ship length must be between 2 and 4')
    }
    //Direction must be either 0 or 1
    else if(direction !== 0 && direction !== 1){
      isValidSetUp = false
      console.log('Direction must be either 0 or 1')
    }
    //The coordinates are already occupied with a ship
    else if(player1Board[x][y] !== '-' || player2Board[x][y] !== '-'){
      isValidSetUp = false
      console.log('The coordinates selected are occupied.')
    }
  }
  return isValidSetUp
}

//FIRING PHASE
Player.prototype.fire = function(x, y){
  let coord = `${x},${y}`
  let result = 'MISS!'
  let allShips = player1.getAllShips
  for(let ship in player1.getAllShips){
    let shipCoords = player1.getAllShips[ship]
    if(shipCoords.hasOwnProperty(coord)){
      result = 'HIT!'
    }
  }
  console.log(result)
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
        player1Board[x][y + i] = 'O'
      }
    }

    if(direction === 1){
      for(let i = 0; i < length; i++){
        player1Board[x + i][y] = 'O'
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
        player2Board[x][y + i] = 'O'
      }
    }

    if(direction === 1){
      for(let i = 0; i < length; i++){
        player2Board[x + i][y] = 'O'
      }
    }
  }
  this.shipCount ++
}
//Get a single ship information
Player.prototype.getShip = function(id) {
  return this.getAllShips['ship' + id]
}
//View player BOARD
Player.prototype.viewBoard = function(){
  //view player 1 board
  if(this.name === PLAYER_1){
    console.log('\x1b[33m%s\x1b[0m','--- PLAYER 1 BOARD ---')
    console.log('\x1b[33m%s\x1b[0m', '  0 1 2 3 4 5 6 7 8 9')
    for(let i = 0; i < player1Board.length; i++){
        console.log("\x1b[33m%s\x1b[0m", i + ' ' + player1Board[i].join(' '))
      }
  }
  //view player 2 board
  if(this.name === PLAYER_2){
    console.log('\x1b[36m%s\x1b[0m','--- PLAYER 2 BOARD ---')
    console.log('\x1b[36m%s\x1b[0m', '  0 1 2 3 4 5 6 7 8 9')
    for(let i = 0; i < player2Board.length; i++){
        console.log("\x1b[36m%s\x1b[0m", i + ' ' + player2Board[i].join(' '))
      }
  }
}

// ----------------------------------------------


let totalShips = 0;
function promptInput(prompt, handler) {
  //SET UP PHASE
  if (totalShips < MAX_SHIP_NUMBER) {
    console.log('SET UP PHASE!')
    rl.question(prompt, input => {
      if (handler(input) !== false) {
        if (prompt.includes('Player 1')) {
          if(setUp(input, PLAYER_1)){
            totalShips++
            promptInput(PROMPT.replace('Player 1', 'Player 2'), handler);
          }
          else {
            console.log(INVALID_PROMPT)
            promptInput(PROMPT, handler);
          }
        }
        else {
          if(setUp(input, PLAYER_2)){
            totalShips++
            promptInput(PROMPT, handler);
          }
          else {
            console.log(INVALID_PROMPT)
            promptInput(PROMPT.replace('Player 1', 'Player 2'), handler);
          }
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
