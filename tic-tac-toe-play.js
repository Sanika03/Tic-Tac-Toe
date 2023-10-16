const {ticTacToe} = require('./tic-tac-toe');

const play = ticTacToe("Messi", "Ronaldo");

const printBoard = (board) => {
    console.log(`${board[1] || '_'}  ${board[2] || '_'}  ${board[3] || '_'}`);
    console.log(`${board[4] || '_'}  ${board[5] || '_'}  ${board[6] || '_'}`);
    console.log(`${board[7] || '_'}  ${board[8] || '_'}  ${board[9] || '_'}`);
    board[0] !== "ongoing" && console.log(board[0]);
}
