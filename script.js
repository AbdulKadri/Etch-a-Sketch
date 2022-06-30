const defaultColor = '#FF0000'
let newColor = defaultColor;
let cells;

const grid = document.getElementById('container');
const colorChoice = document.getElementById('colorChoice')
const chooseColor = document.getElementById('chooseColor');
const RGB = document.getElementById('RGB');
const erase = document.getElementById('erase');
const clear = document.getElementById('clear');
const sizeValue = document.getElementById('sizeValue');
const sideSlider = document.getElementById('sizeSlider');

colorChoice.oninput = (e) => setColor(e.target.value);

function setColor(value) {
    newColor = value;
    // return newColor;
}


// Creating the grid
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

//Only allow colouring if mouse is clicked down and dragged across the box
// must add another function with code below
// if (e.type === 'mouseover' && !mouseClick) return;
let mouseClick = false
document.body.onmousedown = () => (mouseClick = true)
document.body.onmouseup = () => (mouseClick = false)

function changeColor() {
    switch (defaultColor) {
        case 'rainbow':
            this.style.backgroundColor = rainbow();
            break;
        case 'erase':
            this.style.backgroundColor = 'white';
            console.log('hi')
            break;
        case 'color':
            this.style.backgroundColor = newColor;
            break;
        default:
            this.style.backgroundColor = defaultColor;
    }
}