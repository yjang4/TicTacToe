
const DisplayController = (() => {
    const boardDiv = document.querySelector('.board'); 
    let winMessage = document.querySelector('.winMessage');
    let startButton = document.querySelector('.startButton');
    let startDiv = document.querySelector('.start');
    const board = ['','','','','','','','',''];
    let currentTurn = 'X';
    function startGame() {
        startButton.addEventListener("click", function (event) {
            
            
            }, false);
    }
    function displayBoard() {
        for (let i = 0; i < board.length; i++) {
            const div = document.createElement('div');
            div.classList.add('unit');
            div.setAttribute('id', i);
            div.addEventListener("click", function (event) {
                if(board[i] == '') {
                    board[i] = currentTurn;
                    updateBoard();
                    if(isGameOver()) {
                        winMessage.textContent = currentTurn + ' wins!';
                    }
                    if(currentTurn == 'X') currentTurn = 'O';
                    else currentTurn = 'X';
                }
                
                }, false);
            div.textContent= board[i];
            boardDiv.appendChild(div);
        }
    }
    function removeBoard() {
        while (boardDiv.firstChild) {
            boardDiv.removeChild(boardDiv.firstChild);
        }
    }
    function updateBoard() {
        removeBoard();
        displayBoard();
    }
    function isHorizontalCheck() {
        for(let i = 0; i < 9; i +=3) {
            if(board[i] == board[i + 1] && board[i + 1] == board[i + 2] 
                && board[i] != '' && board[i + 1] != '' && board[i + 2] != '') {
                return true;
            }
        }
        return false;
    }
    function isVerticalCheck() {
        for(let i = 0; i < 3; i ++) {
            if(board[i] == board[i + 3] && board[i + 3] == board[i + 6] 
                && board[i] != '' && board [i + 3] != '' && board[i + 6] != '') {
                return true;
            }

        }
        return false;
    }
    function isDiagonalCheck() {
        if(board[0] == board[4] && board[4] == board[8] 
            && board[0] != '' && board [4] != '' && board[8] != '') {
            return true;
        }
        if(board[2] == board[4] && board[4] == board[6] 
            && board[2] != '' && board [4] != '' && board[6] != '') {
            return true;
        }
        
        return false;
    }
    function isGameOver() {
        if(isHorizontalCheck()) {
            console.log("horizontal win");
            return true;
        }
        if(isVerticalCheck()) {
            console.log("vertical win");
            return true;
        }
        if(isDiagonalCheck()) {
            console.log("diagonal win");
            return true;
        }

        return false;
        
    }
    return {
        displayBoard,
        updateBoard,
    };
})();
