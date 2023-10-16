const ticTacToe = (xName, oName) => {
    const X = "X";
    const O = "O";

    const players = {
        x: xName,
        o: oName
    }
    
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
    }
};

module.exports = {ticTacToe};