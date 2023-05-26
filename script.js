const GameBoard = (() => {
    const board = [0,0,0,0,0,0,0,0,0];

    return {
        board,

    };
})();
const DisplayController = (() => {
    const boardDiv = document.querySelector('.board'); 
    function displayBoard() {
        for (let i = 0; i < GameBoard.board.length; i++) {
            const div = document.createElement('div');
            div.classList.add('unit');
            div.setAttribute('id', i);
            div.textContent= GameBoard.board[i];
            boardDiv.appendChild(div);
        }
    }
    return {
        displayBoard,
   
    };
})();
DisplayController.displayBoard();
