let grid = document.querySelector('#grid');
let squareDivs;
const container = document.querySelector('#container');
const buttonsDiv = document.querySelector('#buttons');
const clearButton = document.querySelector('#clear');
const randomColorButton = document.querySelector('#random-color');
const body = document.querySelector('body');

function makeBackgroundBlack(div) {
    if (Number(div.target.getAttribute('opacity')) < 1) {
        let opacity = (Number(div.target.getAttribute('opacity'))*10 + 0.1*10) / 10;
        div.target.setAttribute('opacity', opacity.toString());
        div.target.style.cssText = `background-color: rgb(0, 0, 0, ${opacity})`;
    }
}

function makeBackgroundRandomColor(div) {
    div.target.style.cssText = `background-color: rgb(${Math.floor(Math.random() * 256)}, 
    ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

function createGrid(cellSize = 16) {
    grid.style['grid-template-columns'] = `repeat(${cellSize}, 1fr)`;
    grid.style['grid-template-rows'] = `repeat(${cellSize}, 1fr)`;
    for (let i = 0; i < cellSize ** 2; i++) {
        const squareDiv = document.createElement('div');
        squareDiv.setAttribute('opacity', '0');
        squareDiv.style.cssText = `background-color: rgba(0, 0, 0, 0.0)`;
        squareDiv.textContent = " ";
        squareDiv.addEventListener('mouseover', makeBackgroundBlack, false);
        grid.appendChild(squareDiv);
    }
    squareDivs = document.querySelectorAll('#grid div');
}

createGrid();

clearButton.addEventListener('click', () => {
    squareDivs.forEach((div) => {
        div.style.backgroundColor = "lightgrey";
    });
    let numberofSquares = Number(prompt('Enter the number of squares per side for the new grid'));
    grid.remove();
    grid = document.createElement('div');
    grid.setAttribute('id', 'grid');
    container.insertBefore(grid, buttonsDiv);
    if (isNaN(numberofSquares)) {
        createGrid()
    } else if (numberofSquares <= 100) {
        createGrid(numberofSquares);
    }
});

randomColorButton.addEventListener('click', () => {
    squareDivs.forEach((div) => {
        div.removeEventListener('mouseover', makeBackgroundBlack, false);
        div.addEventListener('mouseover', makeBackgroundRandomColor, false);
    })
});