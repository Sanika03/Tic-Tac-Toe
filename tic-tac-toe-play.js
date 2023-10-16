const { ticTacToe } = require('./tic-tac-toe');

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

let xPlayer, oPlayer, result, boardOrMessage, play;

const printBoard = (board) => {
    console.log(`${board[1] || '_'}  ${board[2] || '_'}  ${board[3] || '_'}`);
    console.log(`${board[4] || '_'}  ${board[5] || '_'}  ${board[6] || '_'}`);
    console.log(`${board[7] || '_'}  ${board[8] || '_'}  ${board[9] || '_'}`);
    board[0] !== "ongoing" && console.log(board[0]);
}

const getUserMove = (currentPlayer) => {
    readline.question(`Enter your move for Player ${currentPlayer}: `, (move) => {
        [result, boardOrMessage] = play(currentPlayer, parseInt(move));
        if (result) {
            printBoard(boardOrMessage);
            if (boardOrMessage[0] === "ongoing") {
                const nextPlayer = currentPlayer === "X" ? "O" : "X";
                getUserMove(nextPlayer); // recursion
            } else {
                readline.close();
            }
        } else {
            console.log(boardOrMessage);
            getUserMove(currentPlayer); // Ask for move in case of error (recursion)
        }
    });
};

const getUserNames = () => {
    readline.question("Enter player name for X: ", (xName) => {
        xPlayer = xName;
        readline.question("Enter player name for O: ", (oName) => {
            oPlayer = oName;
            play = ticTacToe(xPlayer, oPlayer); // Initialize play
            getUserMove("X");
        });
    });
};

getUserNames();