const gameBoard = (() => {
    let grid = ['', '', '', '', '', '', '', '', ''];
    return { grid };
})();

const players = (name, marker) => {
    const clickGrid0 = document.querySelector('.game-grid-0');
    const clickGrid1 = document.querySelector('.game-grid-1');
    const clickGrid2 = document.querySelector('.game-grid-2');
    const clickGrid3 = document.querySelector('.game-grid-3');
    const clickGrid4 = document.querySelector('.game-grid-4');
    const clickGrid5 = document.querySelector('.game-grid-5');
    const clickGrid6 = document.querySelector('.game-grid-6');
    const clickGrid7 = document.querySelector('.game-grid-7');
    const clickGrid8 = document.querySelector('.game-grid-8');
    
    const {grid} = gameBoard;
    const playerTurn = (gridSlot, marker) => {
        if (gridSlot === 0) {
            clickGrid0.textContent = marker;
            grid.splice(gridSlot, 1, marker);
        } else if (gridSlot === 1) {
            clickGrid1.textContent = marker;
            grid.splice(gridSlot, 1, marker);
        } else if (gridSlot === 2) {
            clickGrid2.textContent = marker;
            grid.splice(gridSlot, 1, marker);
        } else if (gridSlot === 3) {
            clickGrid3.textContent = marker;
            grid.splice(gridSlot, 1, marker);
        } else if (gridSlot === 4) {
            clickGrid4.textContent = marker;
            grid.splice(gridSlot, 1, marker);
        } else if (gridSlot === 5) {
            clickGrid5.textContent = marker;
            grid.splice(gridSlot, 1, marker);
        } else if (gridSlot === 6) {
            clickGrid6.textContent = marker;
            grid.splice(gridSlot, 1, marker);
        } else if (gridSlot === 7) {
            clickGrid7.textContent = marker;
            grid.splice(gridSlot, 1, marker);
        } else if (gridSlot === 8) {
            clickGrid8.textContent = marker;
            grid.splice(gridSlot, 1, marker); 
        }}

    
    return {name, 
            marker, 
            grid, 
            clickGrid0,
            clickGrid1,
            clickGrid2,
            clickGrid3,
            clickGrid4,
            clickGrid5,
            clickGrid6,
            clickGrid7,
            clickGrid8,
            playerTurn};
}

const gameFlow = () => {
    if ( 
        (player1.grid[0] === 'x' && player1.grid[1] === 'x' && player1.grid[2] === 'x') ||
        (player1.grid[3] === 'x' && player1.grid[4] === 'x' && player1.grid[5] === 'x') ||   
        (player1.grid[6] === 'x' && player1.grid[7] === 'x' && player1.grid[8] === 'x') ||
        (player1.grid[0] === 'x' && player1.grid[3] === 'x' && player1.grid[6] === 'x') ||
        (player1.grid[1] === 'x' && player1.grid[4] === 'x' && player1.grid[7] === 'x') ||
        (player1.grid[2] === 'x' && player1.grid[5] === 'x' && player1.grid[8] === 'x') ||
        (player1.grid[0] === 'x' && player1.grid[4] === 'x' && player1.grid[8] === 'x') ||
        (player1.grid[2] === 'x' && player1.grid[4] === 'x' && player1.grid[6] === 'x')    
        ) {
        console.log(player1.name + ' wins!');
    } else if ( 
        (player2.grid[0] === 'o' && player2.grid[1] === 'o' && player2.grid[2] === 'o') ||
        (player2.grid[3] === 'o' && player2.grid[4] === 'o' && player2.grid[5] === 'o') ||   
        (player2.grid[6] === 'o' && player2.grid[7] === 'o' && player2.grid[8] === 'o') ||
        (player2.grid[0] === 'o' && player2.grid[3] === 'o' && player2.grid[6] === 'o') ||
        (player2.grid[1] === 'o' && player2.grid[4] === 'o' && player2.grid[7] === 'o') ||
        (player2.grid[2] === 'o' && player2.grid[5] === 'o' && player2.grid[8] === 'o') ||
        (player2.grid[0] === 'o' && player2.grid[4] === 'o' && player2.grid[8] === 'o') ||
        (player2.grid[2] === 'o' && player2.grid[4] === 'o' && player2.grid[6] === 'o')  
        ) {
        console.log(player2.name + ' wins!');    
        } 
}




player1 = players('Art', 'x');
player2 = players('Stacey', 'o');

player1.playerTurn(2,player1.marker);
player1.playerTurn(4,player1.marker);
player1.playerTurn(6,player1.marker);

player1.clickGrid0.addEventListener('click', () => {
    player1.playerTurn(0,player1.marker); 
    console.log('clicked grid index 0');
    player1.grid.splice(0, 1, player1.marker);
});

// clickGrid0.addEventListener('click', clickedGrid)

// function clickedGrid () {
//     console.log('clicked grid index 0')
// }