const GameBoard = (() => {
    const board = ['x','','','','','','','',''];
    function boardClick(index) {
        board[index] = 'X';
        console.log("da");
        DisplayController.updateBoard();
    }

    return {
        board,
        boardClick
    };
})();
const DisplayController = (() => {
    const boardDiv = document.querySelector('.board'); 
    function displayBoard() {
        for (let i = 0; i < GameBoard.board.length; i++) {
            const div = document.createElement('div');
            div.classList.add('unit');
            div.setAttribute('id', i);
            div.addEventListener("onclick", GameBoard.boardClick(i));;
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
 
    }
    return {
        displayBoard,
        updateBoard,
    };
})();
DisplayController.displayBoard();
