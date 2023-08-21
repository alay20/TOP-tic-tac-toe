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
}

//Temp create players
const player1 = players('Art', 'x');
const player2 = players('Stacey', 'o');

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
    
    const players = [
        {
            name: player1.name,
            marker: player1.marker
        },
        {
            name: player2.name,
            marker: player2.marker
        }
    ];  

    let activePlayer = players[0];

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };

   const getActivePlayer = () => activePlayer;

//    const checkFullGrid = gameBoard.fullGrid();

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
        console.log(player1.name + ' wins!');
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
        console.log(player2.name + ' wins!');    
        clickGrid.forEach((_value, index) => clickGrid[index].disabled = true);
    } else if (gameBoard.fullGrid() === true) {
        console.log('Draw!');
    }
   }

   return {clickGrid, gridCont, board, playerTurn, switchPlayerTurn, getActivePlayer, winner}
})();


//Event listener when gameboard is clicked
gameFlow.gridCont.addEventListener('click', (e) => {
    const clickedGridSlot = e.target;
    const clickedGridIndex = Array.from(gameFlow.clickGrid).indexOf(clickedGridSlot);
    console.log('the clicked slot is ' + clickedGridIndex);
    
    if (clickedGridIndex !== -1) {
        const activePlayer = gameFlow.getActivePlayer();
        const marker = activePlayer.marker; 

        gameFlow.playerTurn(clickedGridIndex, marker);
        gameFlow.switchPlayerTurn();
        clickedGridSlot.disabled = true;
        gameFlow.winner();
    }
})




// function winner () {
// if ( 
//     (gameFlow.board[0] === 'x' && gameFlow.board[1] === 'x' && gameFlow.board[2] === 'x') ||
//     (gameFlow.board[3] === 'x' && gameFlow.board[4] === 'x' && gameFlow.board[5] === 'x') ||   
//     (gameFlow.board[6] === 'x' && gameFlow.board[7] === 'x' && gameFlow.board[8] === 'x') ||
//     (gameFlow.board[0] === 'x' && gameFlow.board[3] === 'x' && gameFlow.board[6] === 'x') ||
//     (gameFlow.board[1] === 'x' && gameFlow.board[4] === 'x' && gameFlow.board[7] === 'x') ||
//     (gameFlow.board[2] === 'x' && gameFlow.board[5] === 'x' && gameFlow.board[8] === 'x') ||
//     (gameFlow.board[0] === 'x' && gameFlow.board[4] === 'x' && gameFlow.board[8] === 'x') ||
//     (gameFlow.board[2] === 'x' && gameFlow.board[4] === 'x' && gameFlow.board[6] === 'x')    
//     ) {
//     console.log(player1.name + ' wins!');
// } else if ( 
//     (gameFlow.board[0] === 'o' && gameFlow.board[1] === 'o' && gameFlow.board[2] === 'o') ||
//     (gameFlow.board[3] === 'o' && gameFlow.board[4] === 'o' && gameFlow.board[5] === 'o') ||   
//     (gameFlow.board[6] === 'o' && gameFlow.board[7] === 'o' && gameFlow.board[8] === 'o') ||
//     (gameFlow.board[0] === 'o' && gameFlow.board[3] === 'o' && gameFlow.board[6] === 'o') ||
//     (gameFlow.board[1] === 'o' && gameFlow.board[4] === 'o' && gameFlow.board[7] === 'o') ||
//     (gameFlow.board[2] === 'o' && gameFlow.board[5] === 'o' && gameFlow.board[8] === 'o') ||
//     (gameFlow.board[0] === 'o' && gameFlow.board[4] === 'o' && gameFlow.board[8] === 'o') ||
//     (gameFlow.board[2] === 'o' && gameFlow.board[4] === 'o' && gameFlow.board[6] === 'o')  
//     ) {
//     console.log(player2.name + ' wins!');    
//     }
// }

// player1.playerTurn(2,player1.marker);
// player1.playerTurn(4,player1.marker);
// player1.playerTurn(6,player1.marker);

// gameFlow.clickGrid.forEach((gridSlot) => {
//     gridSlot.addEventListener('click', () => gameFlow.switchPlayerTurn());
// });

// gameFlow.clickGrid.forEach((gridSlot, index) => {
//     gridSlot.addEventListener('click', () => {
//     if (gameFlow.getActivePlayer() === players[0]){       
//         gameFlow.playerTurn(index, player1.marker);
//     } else if (gameFlow.getActivePlayer() === players[1]) {       
//         gameFlow.playerTurn(index, player2.marker);
//     }})}
// );

// gameFlow.clickGrid.forEach((gridSlot, index) => {
//     gridSlot.addEventListener('click', () => gameFlow.playerTurn(index, player1.marker));
// });

// gameFlow.clickGrid.forEach((gridSlot, index) => {
//     gridSlot.addEventListener('click', () => gameFlow.playerTurn(index, player2.marker));
// });






// const gridZero = document.querySelector('.game-grid-0');

// gridZero.addEventListener('click', () =>  {
//     if (gameFlow.getActivePlayer() === players[0]){       
//         gameFlow.playerTurn(index, player1.marker);
//     } else if (gameFlow.getActivePlayer() === players[1]) {       
//         gameFlow.playerTurn(index, player2.marker);
//     }
// })


// if ( 
//     (player1.grid[0] === 'x' && player1.grid[1] === 'x' && player1.grid[2] === 'x') ||
//     (player1.grid[3] === 'x' && player1.grid[4] === 'x' && player1.grid[5] === 'x') ||   
//     (player1.grid[6] === 'x' && player1.grid[7] === 'x' && player1.grid[8] === 'x') ||
//     (player1.grid[0] === 'x' && player1.grid[3] === 'x' && player1.grid[6] === 'x') ||
//     (player1.grid[1] === 'x' && player1.grid[4] === 'x' && player1.grid[7] === 'x') ||
//     (player1.grid[2] === 'x' && player1.grid[5] === 'x' && player1.grid[8] === 'x') ||
//     (player1.grid[0] === 'x' && player1.grid[4] === 'x' && player1.grid[8] === 'x') ||
//     (player1.grid[2] === 'x' && player1.grid[4] === 'x' && player1.grid[6] === 'x')    
//     ) {
//     console.log(player1.name + ' wins!');
// } else if ( 
//     (board.grid[0] === 'o' && board.grid[1] === 'o' && board.grid[2] === 'o') ||
//     (board.grid[3] === 'o' && board.grid[4] === 'o' && board.grid[5] === 'o') ||   
//     (board.grid[6] === 'o' && board.grid[7] === 'o' && board.grid[8] === 'o') ||
//     (board.grid[0] === 'o' && board.grid[3] === 'o' && board.grid[6] === 'o') ||
//     (board.grid[1] === 'o' && board.grid[4] === 'o' && board.grid[7] === 'o') ||
//     (board.grid[2] === 'o' && board.grid[5] === 'o' && board.grid[8] === 'o') ||
//     (board.grid[0] === 'o' && board.grid[4] === 'o' && board.grid[8] === 'o') ||
//     (board.grid[2] === 'o' && board.grid[4] === 'o' && board.grid[6] === 'o')  
//     ) {
//     console.log(player2.name + ' wins!');    
//     }


// addEventListener('click', () => {
//     player1.playerTurn(0,player1.marker); 
//     console.log('clicked grid index 0');
//     board.grid.splice(0, 1, player1.marker);
// });

// clickGrid0.addEventListener('click', clickedGrid)

// function clickedGrid () {
//     console.log('clicked grid index 0')
// }

 // const clickGrid0 = document.querySelector('.game-grid-0');
    // const clickGrid1 = document.querySelector('.game-grid-1');
    // const clickGrid2 = document.querySelector('.game-grid-2');
    // const clickGrid3 = document.querySelector('.game-grid-3');
    // const clickGrid4 = document.querySelector('.game-grid-4');
    // const clickGrid5 = document.querySelector('.game-grid-5');
    // const clickGrid6 = document.querySelector('.game-grid-6');
    // const clickGrid7 = document.querySelector('.game-grid-7');
    // const clickGrid8 = document.querySelector('.game-grid-8');

// const playerTurn = (gridSlot, marker) => {
    //     if (gridSlot === 0) {
    //         clickGrid0.textContent = marker;
    //         board.getGrid.splice(gridSlot, 1, marker);
    //     } else if (gridSlot === 1) {
    //         clickGrid1.textContent = marker;
    //         board.getGrid.splice(gridSlot, 1, marker);
    //     } else if (gridSlot === 2) {
    //         clickGrid2.textContent = marker;
    //         board.getGrid.splice(gridSlot, 1, marker);
    //     } else if (gridSlot === 3) {
    //         clickGrid3.textContent = marker;
    //         board.getGrid.splice(gridSlot, 1, marker);
    //     } else if (gridSlot === 4) {
    //         clickGrid4.textContent = marker;
    //         board.getGrid.splice(gridSlot, 1, marker);
    //     } else if (gridSlot === 5) {
    //         clickGrid5.textContent = marker;
    //         board.getGrid.splice(gridSlot, 1, marker);
    //     } else if (gridSlot === 6) {
    //         clickGrid6.textContent = marker;
    //         board.getGrid.splice(gridSlot, 1, marker);
    //     } else if (gridSlot === 7) {
    //         clickGrid7.textContent = marker;
    //         board.getGrid.splice(gridSlot, 1, marker);
    //     } else if (gridSlot === 8) {
    //         clickGrid8.textContent = marker;
    //         board.getGrid.splice(gridSlot, 1, marker); 
    //     }}
    
    // const playerTurn = (gridSlot, marker) => {
    //     if (gridSlot === 0) {
    //         clickGrid0.textContent = marker;
    //         grid.splice(gridSlot, 1, marker);
    //     } else if (gridSlot === 1) {
    //         clickGrid1.textContent = marker;
    //         grid.splice(gridSlot, 1, marker);
    //     } else if (gridSlot === 2) {
    //         clickGrid2.textContent = marker;
    //         grid.splice(gridSlot, 1, marker);
    //     } else if (gridSlot === 3) {
    //         clickGrid3.textContent = marker;
    //         grid.splice(gridSlot, 1, marker);
    //     } else if (gridSlot === 4) {
    //         clickGrid4.textContent = marker;
    //         grid.splice(gridSlot, 1, marker);
    //     } else if (gridSlot === 5) {
    //         clickGrid5.textContent = marker;
    //         grid.splice(gridSlot, 1, marker);
    //     } else if (gridSlot === 6) {
    //         clickGrid6.textContent = marker;
    //         grid.splice(gridSlot, 1, marker);
    //     } else if (gridSlot === 7) {
    //         clickGrid7.textContent = marker;
    //         grid.splice(gridSlot, 1, marker);
    //     } else if (gridSlot === 8) {
    //         clickGrid8.textContent = marker;
    //         grid.splice(gridSlot, 1, marker); 
    //     }}

     // clickGrid1,
            // clickGrid2,
            // clickGrid3,
            // clickGrid4,
            // clickGrid5,
            // clickGrid6,
            // clickGrid7,
            // clickGrid8,