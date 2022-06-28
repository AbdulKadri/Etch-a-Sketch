const grid = document.getElementById('container');
let cells;

function makeGrid(side) {
    for (let x = 0; x < (side * side); x++) {
        cells = document.createElement('div');
        cells.setAttribute('id', 'cells');
        cells.addEventListener('mouseover', changeColor)
        cells.addEventListener('mousedown', changeColor)
        grid.appendChild(cells);
    };
};

makeGrid(16);

let mouseClick = false
document.body.onmousedown = () => (mouseClick = true)
document.body.onmouseup = () => (mouseClick = false)

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseClick) return;
    e.target.style.backgroundColor = '#000000'
}