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
var player = 1;
var striker1 = [];
var striker2 = [];
// var dataAttr = 0;
var counterToWin = 0;
// var winStatus = false;
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



function restart() {
  console.log('restart');
  player = 1;
  striker1 = [];
  striker2 = [];
  // var dataAttr = 0;
  counterToWin = 0;
  // var winStatus = false;
  win = 0;
}

// playTurn(index)
//
// indicate allow or not allow boolean
//
// isGameOver()
// boolean
//
// whoWon()
// 0 no one win
// 1 player one win
// 2 player two win
// 3 player draw
//
// restart()

// var cool = $('td:nth-of-type(1)').attr('data-id');
// console.log(cool);




$('td').click(function() {
  // if data-taken == 0
  // go to played
  // else
  // try again

  var cell = $(this).attr('data-taken');
  if (cell == 0) {
    var id = $(this).attr('data-id');
    playTurn(id);
  } else {
    console.log('Try Again');
  }
});


function playTurn(index) {

  var updateCell = `[data-id="${index}"]`;
  $(updateCell).attr('data-taken', '1');
  $(updateCell).addClass('player' + player);
  index = parseInt(index);
  if (player == 1) {
    striker1.push(index);
  } else {
    striker2.push(index);
  }

  if (player == 1) {
    striker = striker1;
  } else {
    striker = striker2;
  }

  if (striker.length >= 3) {
    for (var i of winningCombo) {
      console.log('This is i ' + i);
      for (var j of striker) {
        console.log('This is j ' + j);
        if (i.includes(j)) {
          counterToWin++;
          console.log('Counter to Win ' + counterToWin);
        }
      }
      if (counterToWin == 3) {
        if (player == 1) {
          win = 1;
          console.log('Winner player 1');
        } else {
          win = 2
          console.log('Winner player 2');
        }
      }
      counterToWin = 0;
    }
    console.log('The length ' + striker.length + ' win ' + win);
  }


  if (striker.length == 5 && win == 0) {
    win = 3;
    console.log('Now win is ' + win);
  }

isGameOver();
}


function isGameOver() {
  if (whoWon(win)) {
   console.log('Game Over');
  } else {
    console.log('Continue with game');
    if (player == 1) {
      player = 2;
    } else {
      player = 1;
    }
  }
}


function whoWon(win) {
if (win == 1) {
  console.log('player 1 win');
  return true;
} else if (win == 2) {
  console.log('player 2 win');
  return true;
} else if (win == 3) {
console.log('its a draw');
return true;
} else {
console.log('continue game');
return false;
}
}




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
