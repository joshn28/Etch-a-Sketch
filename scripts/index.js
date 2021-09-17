let container = document.querySelector('#container');
const clearButton = document.querySelector('button');
const body = document.querySelector('body');

function createGrid(cellSize = 16) {
    container.style['grid-template-columns'] = `repeat(${cellSize}, 1fr)`;
    container.style['grid-template-rows'] = `repeat(${cellSize}, 1fr)`;
    for (let i = 0; i < cellSize ** 2; i++) {
        const squareDiv = document.createElement('div');
        squareDiv.style.backgroundColor = "lightgrey";
        squareDiv.textContent = " ";
        squareDiv.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = "black";
        });
        container.appendChild(squareDiv);
    }
}

createGrid();

const squareDivs = document.querySelectorAll('#container div');

clearButton.addEventListener('click', () => {
    squareDivs.forEach((div) => {
        div.style.backgroundColor = "lightgrey";
    });
    let numberofSquares = Number(prompt('Enter the number of squares per side for the new grid'));
    console.log(numberofSquares);
    if (numberofSquares <= 100) {
        console.log('worked');
        container.remove();
        container = document.createElement('div');
        container.setAttribute('id', 'container');
        body.appendChild(container);
        createGrid(numberofSquares);
    }
});