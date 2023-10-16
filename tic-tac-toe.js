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

    const computeStatus = () => {
        const winningCombos = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9],
            [1, 5, 9],
            [3, 5, 7]
        ];
    
        const win = winningCombos.some(([i1, i2, i3]) => {
            if (board[i1] === board[i2] && board[i2] === board[i3] && board[i3] === currentPlayer) {
                return true;
            }
            return false;
        });
    
        if (win) 
            return `win-${currentPlayer}`;
    
        let areAllCellsTaken = true;
        for (let i = 1; i <= 9; i++) {
            if (board[i] === "") {
                areAllCellsTaken = false;
                break;
            }
        }
    
        if (areAllCellsTaken) 
            return "draw";
    
        // continue the game
        return "ongoing";
    };

    return (player, move) => {
        // validate right player
        if (player !== currentPlayer) {
            return [false, `Not your turn. It's ${currentPlayer}'s turn.`];
        }

        // validate right move
        if(!isValidMove(move))
            return [false, "Invalid move, try again."];

        board[move] = currentPlayer;
        board[0] = computeStatus();
        currentPlayer = nextPlayer[currentPlayer];

        // progress the game:
            // 1. update the board
            // 2. update the game status
            // 3. change the current player
        return [true, board];
    };
};

module.exports = {ticTacToe};