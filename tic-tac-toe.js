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
var playerOneStriker = [];
var playerTwoStriker = [];
var dataAttr = 0;
var counterToWin = 0;
var winStatus = false;
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

function playTurn(index) {
  if (player == 1) {
    $('[data-id="' + index + '"]').attr('data-taken', 1);
    $('[data-id="' + index + '"]').addClass('.player' + index);
  }
// $(index).attr('data-taken', '1');
//   console.log();
}



$('td').click(function() {
  console.log($(this).attr('data-taken'));
  if ($(this).attr('data-taken') == 0) {
    console.log($(this).attr('data-id'));
     playTurn($(this).attr('data-id'));
  } else {
    console.log('Cell taken');
  }
});
