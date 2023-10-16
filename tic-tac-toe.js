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

    return (player, move) => {
        // validate right player
        if (player !== currentPlayer) {
            return [false, `Not your turn. It's ${currentPlayer}'s turn.`];
        }
    };
};

module.exports = {ticTacToe};