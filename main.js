const gameBoard = (() => {
    let grid = ['', '', '', '', '', '', '', '', ''];
    const getGrid = () => grid;
    return { getGrid };
})();


const players = (name, marker, gridSlot) => {
    const clickGrid = document.querySelectorAll('.grid-slot');
    
    const board = gameBoard.getGrid();
    
    const playerTurn = (gridSlot, marker) => {
        if (board[gridSlot] === "") {
            clickGrid[gridSlot].textContent = marker;
            board.splice(gridSlot,1,marker);
        }
    }
    
    return {name, 
            marker, 
            clickGrid,     
            playerTurn};
}

const player1 = players('Art', 'x');
const player2 = players('Stacey', 'o');


const gameFlow = (() => {
    const clickGrid = document.querySelectorAll('.grid-slot');
    
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

   return {clickGrid, activePlayer, switchPlayerTurn, getActivePlayer}
})();



// player1.playerTurn(2,player1.marker);
// player1.playerTurn(4,player1.marker);
// player1.playerTurn(6,player1.marker);




gameFlow.clickGrid.forEach((gridSlot, index) => {
    gridSlot.addEventListener('click', () => player1.playerTurn(index, player1.marker));
});

gameFlow.clickGrid.forEach((gridSlot) => {
    gridSlot.addEventListener('click', () => gameFlow.switchPlayerTurn());
});



player2.clickGrid.forEach((gridSlot, index) => {
    gridSlot.addEventListener('click', () => player2.playerTurn(index, player2.marker));
});




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
//     (player2.grid[0] === 'o' && player2.grid[1] === 'o' && player2.grid[2] === 'o') ||
//     (player2.grid[3] === 'o' && player2.grid[4] === 'o' && player2.grid[5] === 'o') ||   
//     (player2.grid[6] === 'o' && player2.grid[7] === 'o' && player2.grid[8] === 'o') ||
//     (player2.grid[0] === 'o' && player2.grid[3] === 'o' && player2.grid[6] === 'o') ||
//     (player2.grid[1] === 'o' && player2.grid[4] === 'o' && player2.grid[7] === 'o') ||
//     (player2.grid[2] === 'o' && player2.grid[5] === 'o' && player2.grid[8] === 'o') ||
//     (player2.grid[0] === 'o' && player2.grid[4] === 'o' && player2.grid[8] === 'o') ||
//     (player2.grid[2] === 'o' && player2.grid[4] === 'o' && player2.grid[6] === 'o')  
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