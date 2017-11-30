// ### playTurn(index)
// It should take one parameter which is a zero-based index to your grid, indicating where the current player's token should be played.
// It should return a boolean value to indicate whether the move was allowed or not - true if it was successful, false otherwise e.g. if the square is already taken or the game is over.
//
// ### isGameOver()
// It should return a true or false if the game is over.
//
// ### whoWon()
// It should return 0 if the game is not yet finished. Else it should return either 1 or 2 depending on which player one. It should return 3 if the game is a draw.
//
// ### restart()
// It should restart the game so it can be played again.



// add event listen for each cell
// if click on a cell, check if cell is taken
// if taken prompt try other cell, else base on player mark 1 or 2
// check if there is roll of three
// if yes, player? win
// show 1 or 2 to see who won then, restart game
// else if 3 when all cells are taken, restart game
// else return false
// change next player



var player = 1;
var playerOneStrike = [];
var playerTwoStrike = [];
var dataAttr = 0;
var counterToWin = 0;
var winStatus = false;
var winningCombo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];

var cell = document.querySelectorAll('.row td');
var statusBox = document.querySelector('.status-box');
var resetBtn = document.querySelector('.btn-reset');



// restart game
function restart() {
  player = 1;
  playerOneStrike = [];
  playerTwoStrike = [];
  dataAttr = 0;
  counterToWin = 0;
  winStatus = false;

  statusBox.textContent = 'Player 1 - X';

  for (var i = 0; i < cell.length; i++) {
    cell[i].classList.remove('player1', 'player2');
    cell[i].setAttribute('data-taken', 0);
  }
}


// changing of player
function change() {
  if (player === 1) {
    player = 2;
  } else {
    player = 1;
  }
}


// check if anyone won and check if game is over
function checkForWin(playerStrike) {
  if (playerStrike.length >= 3) {
    for (var i = 0; i < winningCombo.length; i++) {
      for (var j = 0; j < playerStrike.length; j++) {
        if (winningCombo[i].includes(playerStrike[j])) {
          counterToWin += 1;
        }
      }
      if (counterToWin == 3) {
        statusBox.textContent = 'Player ' + player + ' Won!';
        // alert('Player ' + player + ' Won!');
        winStatus = true;
        setTimeout(restart, 1000);
      }
      counterToWin = 0;
    }
    isGameOver(playerStrike, winStatus);
  }
}


// check if at least 5 cells taken up and there is no win
function isGameOver(strike, win) {
  if (strike.length == 5 && !win) {
    statusBox.textContent = 'Game Draw';
    setTimeout(restart, 1000);
  }
}


// main play
function playTurn() {
  if (this.getAttribute('data-taken') == 0) {
    this.classList.add('player' + player);
    this.setAttribute('data-taken', 1);

    // getting the attribute to push to array
    // check if player win
    // change player
    if (player == 1) {
      statusBox.textContent = 'Player 2 - O';
      dataAttr = this.getAttribute('data-id');
      dataAttr = parseInt(dataAttr);
      playerOneStrike.push(dataAttr);
      checkForWin(playerOneStrike);
      change();
    } else {
      statusBox.textContent = 'Player 1 - X';
      dataAttr = this.getAttribute('data-id');
      dataAttr = parseInt(dataAttr);
      playerTwoStrike.push(dataAttr);
      checkForWin(playerTwoStrike);
      change();
    }
  } else {
    statusBox.textContent = 'Try again...';
  }
}


// adding of event listener to each cell
for (var i = 0; i < cell.length; i++) {
  cell[i].addEventListener('click', playTurn);
}
// add event listen to reset button
resetBtn.addEventListener('click', restart);
