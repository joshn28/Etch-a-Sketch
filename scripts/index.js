const container = document.querySelector('#container');
const clearButton = document.querySelector('button');

function createGrid() {
    for (let i = 0; i < 16 * 16; i++) {
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
});