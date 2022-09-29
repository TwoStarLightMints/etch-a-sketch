// Left off, creating a drawing function that
// fires and creates the initial grid
// and then removes the initial grid
// when the user wishes to augment the number
// of squares in the grid by way of a button
// press

const container = document.querySelector('#container');
const drawButton = document.querySelector('#draw');

const GRID_SIZE = 360;
const INNER_BORDER_SIZE = 1;

function clearBoard () {
    container.childNodes.forEach(elem => {
        elem.style.backgroundColor = 'white';
    });
}

function getNumSquares () {
    let numString = prompt("Please enter the number of squares that you would like to have in the grid (please enter a whole number and for your computer's sake, keep it below 100)");
    let clean = false;
    let num = 0;

    do {
        num = parseInt(numString);
        if (numString.includes(".")) {
            numString = prompt("Please enter a whole number");
        } else if (isNaN(num)) {
            console.log("entered");
            numString = prompt("Please enter a whole number");
        } else {
            clean = true;
        }
    } while (!clean);

    return num;
}

function calculateSquareSizes (numSquares) {
    return (GRID_SIZE - (INNER_BORDER_SIZE * numSquares * 2)) / numSquares;
}

function drawGrid (numSquares) {
    if (container.childNodes.length != 0) {
        container.textContent = '';
    }
    
    let squareSize = calculateSquareSizes(numSquares);

    for (let i = 0; i < numSquares; i++) {
        for (let i = 0; i < numSquares; i++) {
            let newDiv = document.createElement('div');
            // newDiv.style.display = 'inline-block';
            newDiv.style.backgroundColor = 'white';
            newDiv.style.border = '1px solid black';
            newDiv.style.display = 'inline-block';
            newDiv.style.height = `${squareSize}px`;
            newDiv.style.width = `${squareSize}px`;
            newDiv.addEventListener('mouseover', e => {
                e.target.style.backgroundColor = 'black';
            });
            container.appendChild(newDiv);
        }
    }
}

drawButton.addEventListener('click', () => {
    drawGrid(getNumSquares());
});