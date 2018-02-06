function connectFour() {

  //read line from console
  const readline = require('readline')
  const rl = readline.createInterface(process.stdin, process.stdout)

  //start with player A
  let playerId = 1

  //keep track of the height of the playing column
  let colHeight = [6, 6, 6, 6, 6, 6, 6]

  //Create a recursive function to keep playing until one hits 'exit'
  function startGame(prompt, handler) {
    rl.question(prompt, input => {
      if (handler(input) !== false) {
        if (prompt.includes('A')) {
          playerId = 2;
          startGame('player B turn: please enter column ID:', handler)
        } else {
          playerId = 1;
          startGame('player A turn: please enter column ID:', handler)
        }
      } else {
        rl.close();
        // process.stdin.destroy();
      }
    });
  }

  //create a 7x7 gameBoard
  let gameBoard = [
  ['*', '*', '*', '*', '*', '*', '*'],
  ['*', '*', '*', '*', '*', '*', '*'],
  ['*', '*', '*', '*', '*', '*', '*'],
  ['*', '*', '*', '*', '*', '*', '*'],
  ['*', '*', '*', '*', '*', '*', '*'],
  ['*', '*', '*', '*', '*', '*', '*'],
  ['*', '*', '*', '*', '*', '*', '*']
  ]

  function viewBoard() {
    for(let i = 0; i < gameBoard.length; i++){
      console.log(gameBoard[i].join(' '))
    }
  }

  function playerTurn(columnId){
    if(playerId === 1) {
      let rowId = colHeight[columnId];
      if(rowId >= 0) {
        gameBoard[rowId][columnId] = 'X'
        checkWin([rowId, columnId])
        colHeight[columnId]--
      }
    }
    else if(playerId === 2) {
      let rowId = colHeight[columnId];
      if(rowId >= 0) {
        gameBoard[rowId][columnId] = 'O'
        checkWin([rowId, columnId])
        colHeight[columnId]--
      }
    }
    viewBoard();
  }

  function winnerFound(boolean) {
    if(playerId == 1) {
      console.log('Player A won!')
      rl.close();
      process.stdin.destroy();
    }
    if(playerId == 2) {
      console.log('Player B won!')
      rl.close();
      process.stdin.destroy();
    }
  }

  function checkWin(currentMove) {
    if (playerId === 1) {
      checkWinVertical(currentMove, 'X')
      checkWinHorizontal(currentMove, 'X')
      checkWinDiagonal(currentMove, 'X')

    }

    if (playerId === 2) {
      checkWinVertical(currentMove, 'O')
      checkWinHorizontal(currentMove, 'O')
      checkWinDiagonal(currentMove, 'O')
    }

    //check four in a column
    function checkWinVertical(currentMove, winningMark) {
      let rowId = currentMove[0], columnId = currentMove[1]
      let verticalLine = [];
      for(let i = 0; i < gameBoard.length; i++){
        verticalLine.push(gameBoard[i][columnId])
      }
      if(verticalLine.join('').includes(winningMark.repeat(4))){
        winnerFound(true)
      }
    }

    //check four in a row
    function checkWinHorizontal(currentMove, winningMark) {
      let rowId = currentMove[0], columnId = currentMove[1]
      if(gameBoard[rowId].join('').includes(winningMark.repeat(4))){
        winnerFound(true)
      }
    }

    //check four in a diagonal line
    function checkWinDiagonal(currentMove, winningMark) {

      let rowId = currentMove[0], columnId = currentMove[1]
      checkDiagonalLeftToRight();
      checkDiagonalRightToLeft();

      function checkDiagonalLeftToRight(){
        let diagonalLine = [];
        let i = gameBoard.length - 1, sum = rowId + columnId;
        //only check lines that have more than 3 elements
        if(sum >= 3 && sum <= 9) {
          //check upper diagonal lines
          if (sum >= gameBoard.length - 1) {
            while (i < gameBoard.length && (sum - i < gameBoard.length)) {
              diagonalLine.push(gameBoard[i][sum - i])
              i--
            }
          }
          //check lower diagonal lines
          else {
            //since sum will be modified, create a temp var to hold its value
            let tempSum = sum;
            for(let i = 0; i <= sum; i++) {
              diagonalLine.push(gameBoard[tempSum][i])
              tempSum--
            }
          }
        }
        if(diagonalLine.join('').includes(winningMark.repeat(4))){
          winnerFound(true)
        }
      }
      function checkDiagonalRightToLeft() {
        let diff = Math.abs(rowId - columnId);
        let diagonalLine = [];
        let numOfElements = gameBoard.length - diff;
        //check upper half of diagonal lines, including the main diagonal
        if(rowId <= columnId) {
          let j = gameBoard.length - numOfElements;
          for(let i = 0; i < numOfElements; i++){
            diagonalLine.push(gameBoard[i][j])
            j++
          }
        }
        //check lower half of diagonal lines
        else {
          let j = diff;
          for(let i = 0; i < numOfElements; i++){
            diagonalLine.push(gameBoard[j][i])
            j++
          }
        }
        if(diagonalLine.join('').includes(winningMark.repeat(4))){
          winnerFound(true)
        }
      }
    }
  }

  startGame('player A turn: please enter column ID:', input => {
    switch (input) {
      case '0':
        playerTurn(0)
        break;
      case '1':
        playerTurn(1)
        break;
      case '2':
        playerTurn(2)
        break;
      case '3':
        playerTurn(3)
        break;
      case '4':
        playerTurn(4)
        break;
      case '5':
        playerTurn(5)
        break;
      case '6':
        playerTurn(6)
        break;
      case 'exit':
        console.log('Thank you for playing!');
        return false;
    }
  });
}

connectFour();
