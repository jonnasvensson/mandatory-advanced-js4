

export function checkWinner(rows) { 
    if (checkWinnerHorizontal(rows) 
    || checkWinnerVertical(rows) 
    || checkWinnerDiagonalLeftToRight(rows) 
    || checkWinnerDiagonalRightLeftTo(rows)) {
        return true;    
    }
    return false;
}


function checkWinnerHorizontal(rows) {     //(state) kan också skrivas --> let checkWinner = state.rows;
    console.log(rows);
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < 4; j++) {
            const x = rows[i][j];
            if (x && x === rows[i][j + 1] && x === rows[i][j + 2] && x === rows[i][j + 3]) {
                console.log("THE WINNER IS", x);
                return true;
            }
        }
    }
    return false;
}

function checkWinnerVertical(rows) {
    console.log(rows);
    for (let i = 0; i < rows.length - 3; i++) {
        for (let j = 0; j < 7; j++) {
            const x = rows[i][j];
            if (x && x === rows[i + 1][j] && x === rows[i + 2][j] && x === rows[i + 3][j]) {
                console.log("THE WINNER IS", x);
                return true;
            }
        }
    }
    return false;   
}

function checkWinnerDiagonalLeftToRight(rows) {
    console.log(rows);
    for (let i = 0; i < rows.length - 3; i++) {
        for (let j = 0; j < 4; j++) {
            const x = rows[i][j];            
            if (x && x === rows[i + 1][j - 1] && x === rows[i + 2][j - 2] && x === rows[i + 3][j - 3]) {
                console.log("THE WINNER IS", x);
                return true;
            }
        }
    }   
    return false;
}

function checkWinnerDiagonalRightLeftTo(rows) {
    console.log(rows);
    for (let i = 0; i < rows.length - 3; i++) {
        for (let j = 0; j < 4; j++) {
            const x = rows[i][j];
            if (x && x === rows[i + 1][j + 1] && x === rows[i + 2][j + 2] && x === rows[i + 3][j + 3]) {
                console.log("THE WINNER IS", x);
                return true;
            }
        }
    } 
    return false;
}