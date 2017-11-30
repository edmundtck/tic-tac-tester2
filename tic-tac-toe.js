// playTurn(index)
//
// It should take one parameter which is a zero-based index to your grid, indicating where the current player's token should be played. It should return a boolean value to indicate whether the move was allowed or not - true if it was successful, false otherwise e.g. if the square is already taken or the game is over.
//
// isGameOver()
//
// It should return a true or false if the game is over.
//
// whoWon()
//
// It should return 0 if the game is not yet finished. Else it should return either 1 or 2 depending on which player one. It should return 3 if the game is a draw.
//
// restart()
//
// It should restart the game so it can be played again.
//
// It is assumed that the turns of the player will be automatically changed after an allowed move.
//
// The application will console log all the passed or failed test.

// ======================== DECLARE VARIABLE ========================

var player = 1;
var striker1 = [];
var striker2 = [];
var counterToWin = 0;
var win = 0;
var winningCombo = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];


// ======================== FUNCTIONS ========================

// return true or false to see if game is over
function isGameOver() {
  switch (whoWon()) {
    case 1:
    case 2:
    case 3:
      setTimeout(restart, 1000);
      return true;
    case 0:
      return false;
  }
}


// return value and update status box of who win or draw game
function whoWon() {
  if (win == 1) {
    $('.status-box').text('Player 1 Won!!');
    console.log('player 1 win');
    return 1;
  } else if (win == 2) {
    $('.status-box').text('Player 2 Won!!');
    console.log('player 2 win');
    return 2;
  } else if (win == 3) {
    $('.status-box').text('Game Draw');
    console.log('its a draw');
    return 3;
  } else {
    console.log('continue game');
    return 0;
  }
}


// restart feature
function restart() {
  console.log('restart');
  player = 1;
  striker1 = [];
  striker2 = [];
  // var dataAttr = 0;
  counterToWin = 0;
  // var winStatus = false;
  win = 0;
  gameOver = false;
  $('td').attr('data-taken', 0);
  $('td').removeClass('player1 player2');
  $('.status-box').text('Player 1 - X');
}


// main play area
function playTurn(index) {
  var cell, id, updateCell;
  if (!isGameOver()) {
    cell = $(index).attr('data-taken');
    if (cell == 0) {
      id = $(index).attr('data-id');
      updateCell = `[data-id="${id}"]`;
      $(updateCell).attr('data-taken', '1');
      $(updateCell).addClass('player' + player);
      id = parseInt(id);

// add numbers into array
      if (player == 1) {
        striker1.push(id);
        striker = striker1;
      } else {
        striker2.push(id);
        striker = striker2;
      }

// if more than more / equal to 3 then start doing conditions
      if (striker.length >= 3) {
        for (var i of winningCombo) {
          // console.log('This is i ' + i);
          for (var j of striker) {
            // console.log('This is j ' + j);
            if (i.includes(j)) {
              counterToWin++;
              // console.log('Counter to Win ' + counterToWin);
            }
          }
          if (counterToWin == 3) {
            if (player == 1) {
              win = 1;
              console.log('Winner player 1');
            } else {
              win = 2;
              console.log('Winner player 2');
            }
          }
          counterToWin = 0;
        }
      }

// to check if no one win and all cells are taken up
      if (striker.length == 5 && win == 0) {
        win = 3;
        console.log('It is a draw');
      }

// changing of player
      if (player == 1) {
        player = 2;
        $('.status-box').text('Player 2 - O');
      } else {
        player = 1;
        $('.status-box').text('Player 1 - X');
      }

// if press on a cell taken up
    } else {
      $('.status-box').text('Try Again...');
    }
    isGameOver();
  }
}


// ======================= EVENT LISTENER ========================

$('td').click(function() {
  playTurn(this);
});
$('.btn-reset').click(restart);


// ======================= PSEUDO CODE =========================

// if data-taken == 0
// go to played
// else
// try again
// play(take data-id)
// data-id change data-taken to 1
// update css to player
// push to player array
// win = 0
// if player1 array more than 3
// check if match winning condition true
// win = 1
// if player2 array more than 3
// check if match willing condition true
// win = 2
// else if array player 1 is 5 && win is 0
// win = 3
//
// isGame over?
//
// if win = 0
// change player
// // click a cell
// // if cell is taken you need to try again
// // if cell not taken
// add number to array of player
// update image
// when array reach 3 or more
// check if anyone win
// if no one win,
// check if player 1 reach 5 && if no one win - restart game
// if not change player continue Game
