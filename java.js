const grid = document.getElementById('container');
let cells;

function makeGrid(rows, columns) {
    for (let x = 0; x < (rows * columns); x++) {
        cells = document.createElement('div');
        cells.classList.add('cells');
        // cells.innerText = x + 1;
        grid.appendChild(cells);
    };
};

makeGrid(32, 32);