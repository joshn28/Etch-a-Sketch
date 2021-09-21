let container = document.querySelector('#container');
let squareDivs;
const clearButton = document.querySelector('#clear');
const randomColorButton = document.querySelector('#random-color');
const body = document.querySelector('body');

function makeBackgroundBlack(div) {
    div.target.style.backgroundColor = "black";
}

function makeBackgroundRandomColor(div) {
    div.target.style.cssText = `background-color: rgb(${Math.floor(Math.random() * 256)}, 
    ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

function createGrid(cellSize = 16) {
    container.style['grid-template-columns'] = `repeat(${cellSize}, 1fr)`;
    container.style['grid-template-rows'] = `repeat(${cellSize}, 1fr)`;
    for (let i = 0; i < cellSize ** 2; i++) {
        const squareDiv = document.createElement('div');
        squareDiv.style.backgroundColor = "lightgrey";
        squareDiv.textContent = " ";
        squareDiv.addEventListener('mouseover', makeBackgroundBlack, false);
        container.appendChild(squareDiv);
        squareDivs = document.querySelectorAll('#container div');
    }
}

createGrid();

clearButton.addEventListener('click', () => {
    squareDivs.forEach((div) => {
        div.style.backgroundColor = "lightgrey";
    });
    let numberofSquares = Number(prompt('Enter the number of squares per side for the new grid'));
    console.log(numberofSquares);
    if (numberofSquares <= 100) {
        container.remove();
        container = document.createElement('div');
        container.setAttribute('id', 'container');
        body.appendChild(container);
        createGrid(numberofSquares);
    }
});

randomColorButton.addEventListener('click', () => {
    squareDivs.forEach((div) => {
        div.removeEventListener('mouseover', makeBackgroundBlack, false);
        div.addEventListener('mouseover', makeBackgroundRandomColor, false);
    })
});