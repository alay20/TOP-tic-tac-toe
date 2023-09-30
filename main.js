// Global variables
const player1Marker = 'x';
const player2Marker = 'o';

//Reset button
const resetBtn = document.querySelector('.resetBtn');

//Player1 and Player2 form elements
const player1Button = document.querySelector('.player1Btn');
const player2Button = document.querySelector('.player2Btn');
const player1Text = document.querySelector('#player1');
const player2Text = document.querySelector('#player2');
const player1Form = document.querySelector('.player1-name');
const player2Form = document.querySelector('.player2-name');
const player1Winner = document.querySelector('.player1-winner');
const player2Winner = document.querySelector('.player2-winner');

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
    return { name, marker };
};

const createdPlayers = (() => {
    let storedPlayers = [];

    const getPlayers = () => storedPlayers;

    let activePlayer;

    const switchPlayerTurn = () => {
        if (storedPlayers.length === 2) {
            activePlayer = activePlayer === storedPlayers[0] ? storedPlayers[1] : storedPlayers[0];
        }
    };

    const getActivePlayer = () => activePlayer;

    const setActivePlayer = (player) => {
        activePlayer = player;        
    };

    const createPlayer1 = (e) => {
        const player1Name = document.querySelector('#player1').value;
        const player1 = players(player1Name, player1Marker);
        e.preventDefault();
        console.log('player1 is ' + player1Name)
        createdPlayers.getPlayers().splice(0, 0, player1);
        createdPlayers.setActivePlayer(createdPlayers.getPlayers()[0]);
    
        player1Text.disabled = true;
        player1Button.style.visibility = 'hidden';
    
        // Player2 textbox and button changes
        player2Form.style.visibility = 'visible';
        player2Button.style.visibility = 'visible';
    }

    const createPlayer2 = (e) => {
        const player2Name = document.querySelector('#player2').value;
        const player2 = players(player2Name, player2Marker);
        e.preventDefault();
        console.log('player2 is ' + player2Name)
        createdPlayers.getPlayers().splice(1, 0, player2);
        player2Text.disabled = true;
        player2Button.style.visibility = 'hidden';
    
        // Activate grid
        gameFlow.clickGrid = document.querySelectorAll('.grid-slot');
        gameFlow.clickGrid.forEach((button) => {
            button.disabled = false;
        });

        resetBtn.textContent = 'Kick-off!';
        resetBtn.disabled = true;
        resetBtn.style.cursor = 'auto';
        resetBtn.style.visibility = 'visible';
    }

    return { getPlayers, switchPlayerTurn, getActivePlayer, setActivePlayer, createPlayer1, createPlayer2 };
})();



const gameFlow = (() => {
    let gridCont = document.querySelector('.grid-cont');

    let clickGrid = document.querySelectorAll('.grid-slot');

    let board = gameBoard.getGrid();

    const disablePlayerNameButton = () => {
        if (!player1Form.checkValidity()) {
            player1Button.disabled = true;
        }

        if (!player2Form.checkValidity()) {
            player2Button.disabled = true;
        }
    }

    //Check for player name entry form validity    
    const checkPlayer1Form = () => {
        if (player1Form.checkValidity()) {
            player1Button.disabled = false;
        } else {
            player1Button.disabled = true;
        }
    }
    const checkPlayer2Form = () => {
        if (player2Form.checkValidity()) {
            player2Button.disabled = false;
        } else {
            player2Button.disabled = true;
        }
    }

    const checkPlayer1Entered = () => {
        player1Form.addEventListener('input', checkPlayer1Form);
    }

    const checkPlayer2Entered = () => {
        player2Form.addEventListener('input', checkPlayer2Form);
    }

    const playerTurn = (gridSlot, marker) => {
        if (gameBoard.getGrid()[gridSlot] === '') {
            clickGrid[gridSlot].textContent = marker;
            if (marker === 'x') {
                clickGrid[gridSlot].style.color = 'rgb(165,0,68)';
            } else if (marker === 'o') {
                clickGrid[gridSlot].style.color = 'rgb(255,255,255)';
            }
            gameBoard.getGrid().splice(gridSlot, 1, marker);
        }
    }

    const clickGameBoard = (e) => {
        const clickedGridSlot = e.target;
        const clickedGridIndex = Array.from(clickGrid).indexOf(clickedGridSlot);
        console.log('the clicked slot is ' + clickedGridIndex);
    
        if (clickedGridIndex !== -1) {
            const activePlayer = createdPlayers.getActivePlayer();
            const marker = activePlayer.marker;
    
            playerTurn(clickedGridIndex, marker);
            createdPlayers.switchPlayerTurn();
            clickedGridSlot.disabled = true;
            winner();
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
            player1Winner.textContent = 'Win!';
            resetBtn.textContent = 'Play again';
            resetBtn.disabled = false;
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
            player2Winner.textContent = 'Win!';
            resetBtn.textContent = 'Play again';
            resetBtn.disabled = false;
        } else if (gameBoard.fullGrid() === true) {
            console.log('Draw!');
            player1Winner.textContent = 'Draw!';
            player2Winner.textContent = 'Draw!';
            resetBtn.textContent = 'Play again';
            resetBtn.disabled = false;
        }
    }

    const resetGame = () => {
        
        gameBoard.getGrid().forEach((element, index) => gameBoard.getGrid()[index] = "");
        
        clickGrid.forEach((gridSlot) => {
            gridSlot.remove()});
        
        for (let i = 0; i < 9; i++) {
            const gridSlot = document.createElement('button');
            gridSlot.classList.add('grid-slot');
            gridCont.appendChild(gridSlot);
            }
        
        clickGrid = document.querySelectorAll('.grid-slot');
        clickGrid.forEach((button) => {
            button.disabled = true;
        });
        
        player1Button.style.visibility = 'visible';
        player2Form.style.visibility = 'hidden';
        resetBtn.style.visibility = 'hidden';
        player1Winner.textContent = '';
        player2Winner.textContent = '';
        player1Text.disabled = false;
        player2Text.disabled = false;
        player1Text.value = '';
        player2Text.value = '';
        createdPlayers.getPlayers().splice(0, createdPlayers.getPlayers().length);
        checkPlayer1Form();
        checkPlayer2Form();
        console.log('grid should be cleared')
    }

    return {clickGrid, gridCont, 
        disablePlayerNameButton, checkPlayer1Form, checkPlayer2Form, checkPlayer1Entered, checkPlayer2Entered, playerTurn, clickGameBoard, winner, resetGame}
})();

//Disabled elements when page loads intiially
gameFlow.clickGrid.forEach((button) => {
    button.disabled = true;
});
player2Form.style.visibility = 'hidden';
resetBtn.style.visibility = 'hidden';


// Check that player names have been entered
gameFlow.disablePlayerNameButton();
gameFlow.checkPlayer1Entered();
gameFlow.checkPlayer2Entered();

//Event listener for submitting player names
player1Button.addEventListener('click', createdPlayers.createPlayer1);
player2Button.addEventListener('click', createdPlayers.createPlayer2);


//Event listener when gameboard is clicked
gameFlow.gridCont.addEventListener('click', gameFlow.clickGameBoard);

//Event listener for reset button
resetBtn.addEventListener('click', gameFlow.resetGame);