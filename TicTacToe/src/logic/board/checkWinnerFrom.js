import { WINNER_COMBOS } from '../../constants/constants';

export const checkWinnerFrom = (boardToCheck) => {
    // check winner combinations
    // to see if there is a winner
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo;
        if (boardToCheck[a] &&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]) {
            return boardToCheck[a];
        }
    }
    // if there is no winner
    return null;
};
