const container = document.querySelector('#container');

function createGrid() {
    for (let i = 0; i < 16 * 16; i++) {
        const squareDiv = document.createElement('div');
        squareDiv.style.backgroundColor = "green";
        squareDiv.style.width = '100%';
        squareDiv.style.height = '100%';
        squareDiv.textContent = i;
        container.appendChild(squareDiv);
    }
}

createGrid();