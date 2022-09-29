const container = document.querySelector('#container');

const GRID_SIZE = 192;
const INNER_BORDER_SIZE = 1;

let numSquares = 16;

function clearBoard () {
    container.childNodes.forEach(elem => {
        elem.style.backgroundColor = 'red';
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
    return (192 - (INNER_BORDER_SIZE * numSquares * 2)) / numSquares;
}

let squareSizes = calculateSquareSizes(numSquares);

for (let i = 0; i < numSquares; i++) {
    for (let i = 0; i < numSquares; i++) {
        let newDiv = document.createElement('div');
        // newDiv.style.display = 'inline-block';
        newDiv.style.backgroundColor = 'red';
        newDiv.style.border = '1px solid black';
        newDiv.style.display = 'inline-block';
        newDiv.style.height = `${squareSizes}px`;
        newDiv.style.width = `${squareSizes}px`;
        newDiv.addEventListener('mouseover', e => {
            e.target.style.backgroundColor = 'black';
        });
        container.appendChild(newDiv);
    }
}

console.log(getNumSquares());