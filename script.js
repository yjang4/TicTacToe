const GameBoard = (() => {
    const board = ['','','','','','','','',''];
    const currentTurn = 'X';


    return {
        board,
        currentTurn
    };
})();
const DisplayController = (() => {
    const boardDiv = document.querySelector('.board'); 
    function displayBoard() {
        for (let i = 0; i < GameBoard.board.length; i++) {
            const div = document.createElement('div');
            div.classList.add('unit');
            div.setAttribute('id', i);
            div.addEventListener("click", function (event) {
                if(GameBoard.board[i] == '') {
                    GameBoard.board[i] = GameBoard.currentTurn;
                    if(GameBoard.currentTurn == 'X') GameBoard.currentTurn = 'O';
                    else GameBoard.currentTurn = 'X';
                    updateBoard();
                }
                
                }, false);
            div.textContent= GameBoard.board[i];
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
    function isGameOver() {
        if(GameBoard()) {
            
        }
    }
    return {
        displayBoard,
        updateBoard,
    };
})();
DisplayController.displayBoard();