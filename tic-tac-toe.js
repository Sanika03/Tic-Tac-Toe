const ticTacToe = (xName, oName) => {
    const X = "X";
    const O = "O";

    const players = {
        x: xName,
        o: oName
    };
    
    const board = [
        "ongoing",
        "", "", "",
        "", "", "",
        "", "", ""
    ];

    let currentPlayer = "X";

    const nextPlayer = {
        X: O,
        O: X
    };

    const isValidMove = (move) => {
        return (1 <= move && move <= 9) && board[move] === "";
    }

    return (player, move) => {
        // validate right player
        if (player !== currentPlayer) {
            return [false, `Not your turn. It's ${currentPlayer}'s turn.`];
        }

        // validate right move
        if(!isValidMove(move))
            return [false, "Invalid move, try again."];
    };
};

module.exports = {ticTacToe};