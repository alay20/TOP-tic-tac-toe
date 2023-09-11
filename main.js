// Global variables
const player1Marker = 'x';
const player2Marker = 'o';
// For creating player1 and player2
const player1Button = document.querySelector('.player1Btn'); 
const player2Button = document.querySelector('.player2Btn');

//Player1 and Player2 form elements
const player1Text = document.querySelector('#player1');
const player2Text = document.querySelector('#player2');
const player2Form = document.querySelector('.player2-form');

const gameBoard = (() => {
    let grid = ['', '', '', '', '', '', '', '', ''];
    
    const getGrid = () => grid;

    const fullGrid = () => {
        for (let i = 0; i < grid.length; i++) {
            if (grid[i] === "") {
                return false;
            } 
        }
        return true;
    
    }

    return { getGrid, fullGrid };
})();


const players = (name, marker) => {
    return {name, marker};
};

const createdPlayers = (() => {
    let storedPlayers = [];

    const getPlayers = () => storedPlayers;

    let activePlayer;

    const switchPlayerTurn = () => {
        if (storedPlayers.length === 2) {
        activePlayer = activePlayer === storedPlayers[0] ? storedPlayers[1] : storedPlayers[0];
    }};

    const getActivePlayer = () => activePlayer;

    const setActivePlayer = (player) => {
        activePlayer = player;
    };
    
    return {getPlayers, switchPlayerTurn, getActivePlayer, setActivePlayer};
})();



const gameFlow = (() => {
    const clickGrid = document.querySelectorAll('.grid-slot');
    
    const gridCont = document.querySelector('.grid-cont');

    const board = gameBoard.getGrid();

    const playerTurn = (gridSlot, marker) => {
        if (board[gridSlot] === "") {
            clickGrid[gridSlot].textContent = marker;
            board.splice(gridSlot,1,marker);
        }
    }

    
   const winner = () => {
    if ( 
        (board[0] === 'x' && board[1] === 'x' && board[2] === 'x') ||
        (board[3] === 'x' && board[4] === 'x' && board[5] === 'x') ||   
        (board[6] === 'x' && board[7] === 'x' && board[8] === 'x') ||
        (board[0] === 'x' && board[3] === 'x' && board[6] === 'x') ||
        (board[1] === 'x' && board[4] === 'x' && board[7] === 'x') ||
        (board[2] === 'x' && board[5] === 'x' && board[8] === 'x') ||
        (board[0] === 'x' && board[4] === 'x' && board[8] === 'x') ||
        (board[2] === 'x' && board[4] === 'x' && board[6] === 'x')    
        ) {
        console.log(createdPlayers.getPlayers()[0].name + ' wins!');
        clickGrid.forEach((_value, index) => clickGrid[index].disabled = true);
        
    } else if ( 
        (board[0] === 'o' && board[1] === 'o' && board[2] === 'o') ||
        (board[3] === 'o' && board[4] === 'o' && board[5] === 'o') ||   
        (board[6] === 'o' && board[7] === 'o' && board[8] === 'o') ||
        (board[0] === 'o' && board[3] === 'o' && board[6] === 'o') ||
        (board[1] === 'o' && board[4] === 'o' && board[7] === 'o') ||
        (board[2] === 'o' && board[5] === 'o' && board[8] === 'o') ||
        (board[0] === 'o' && board[4] === 'o' && board[8] === 'o') ||
        (board[2] === 'o' && board[4] === 'o' && board[6] === 'o')  
        ) {
        console.log(createdPlayers.getPlayers()[1].name + ' wins!');    
        clickGrid.forEach((_value, index) => clickGrid[index].disabled = true);
    } else if (gameBoard.fullGrid() === true) {
        console.log('Draw!');
    }
   }

   return {clickGrid, gridCont, board,
         playerTurn, winner}
})();

//Disabled elements when page loads intiially
gameFlow.clickGrid.forEach((button) => {
    button.disabled = true;
});
player2Form.style.visibility = 'hidden';




//Event listener for entering player names
player1Button.addEventListener('click', () => {
    const player1Name = document.querySelector('#player1').value;
    const player1 = players(player1Name, player1Marker);
    event.preventDefault();
    console.log('player1 is ' + player1Name)
    createdPlayers.getPlayers().splice(0,0, player1);
    createdPlayers.setActivePlayer(createdPlayers.getPlayers()[0]);
    
    player1Text.disabled = true;
    player1Button.style.visibility = 'hidden';
    
    // Player2 textbox and button changes
    player2Form.style.visibility = 'visible';
});


player2Button.addEventListener('click', () => {
    const player2Name = document.querySelector('#player2').value;
    const player2 = players(player2Name, player2Marker);
    event.preventDefault();
    console.log('player2 is ' + player2Name)
    createdPlayers.getPlayers().splice(1,0, player2);
    
    // Activate grid
    gameFlow.clickGrid.forEach((button) => {
        button.disabled = false;
    });
});

//Event listener when gameboard is clicked
gameFlow.gridCont.addEventListener('click', (e) => {
    const clickedGridSlot = e.target;
    const clickedGridIndex = Array.from(gameFlow.clickGrid).indexOf(clickedGridSlot);
    console.log('the clicked slot is ' + clickedGridIndex);
    
    if (clickedGridIndex !== -1) {
        const activePlayer = createdPlayers.getActivePlayer();
        const marker = activePlayer.marker;

        gameFlow.playerTurn(clickedGridIndex, marker);
        createdPlayers.switchPlayerTurn();
        clickedGridSlot.disabled = true;
        gameFlow.winner();
    }
})