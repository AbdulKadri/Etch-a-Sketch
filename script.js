let currentButton = 'color'
let currentColor = 'FF0000'

function setColor(newButton) {
    currentButton = newButton
}

function clearGrid() {
    grid.innerHTML = ''
    makeGrid(16)
}

const grid = document.getElementById('grid');
const colorChoice = document.getElementById('colorChoice');
const chooseColor = document.getElementById('chooseColor');
const RGB = document.getElementById('RGB');
const erase = document.getElementById('erase');
const clear = document.getElementById('clear');
const sizeValue = document.getElementById('sizeValue');
const sideSlider = document.getElementById('sizeSlider');

colorChoice.addEventListener('input', (e) => {
    currentColor = e.target.value
})
erase.onclick = () => setColor('erase')
chooseColor.onclick = () => setColor('color')
RGB.onclick = () => setColor('rainbow')
clear.onclick = () => clearGrid()


// Creating the grid
function makeGrid(side) {
    grid.style.gridTemplateColumns = `repeat(${side}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${side}, 1fr)`

    for (let x = 0; x < side ** 2; x++) {
        const gridPixel = document.createElement('div')
        gridPixel.setAttribute('id', 'pixels')
        gridPixel.addEventListener('mouseover', changeColor)
        gridPixel.addEventListener('mousedown', changeColor)
        grid.appendChild(gridPixel)
    }
};

//Only allow colouring if mouse is clicked down and dragged across the box
let mouseClick = false
document.body.onmousedown = () => (mouseClick = true)
document.body.onmouseup = () => (mouseClick = false)

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseClick) return
    if (currentButton === 'color') {
        e.target.style.backgroundColor = currentColor
        console.log(currentColor)
    } else if (currentButton === 'erase') {
        e.target.style.backgroundColor = '#FFFFFF'
    } else if (currentButton === 'rainbow') {
        const amountRed = Math.floor(Math.random() * 256)
        const amountGreen = Math.floor(Math.random() * 256)
        const amountBlue = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${amountRed}, ${amountGreen}, ${amountBlue})`
    }
}

console.log(currentButton)

window.onload = () => {
    makeGrid(16)
}