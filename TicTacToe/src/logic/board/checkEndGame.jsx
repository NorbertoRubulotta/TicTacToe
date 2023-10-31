export const checkEndGame = (newBoard) => {
    // checking if is a tied game
    // if there is not empty spaces(null) in the board
    return newBoard.every((square) => square !== null);
};
