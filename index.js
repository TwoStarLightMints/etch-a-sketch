const container = document.querySelector('#container');

const GRID_SIZE = 192;
const INNER_BORDER_SIZE = 1;

let numSquares = 64;
let squareSizes = (192 - (INNER_BORDER_SIZE * numSquares * 2)) / numSquares;

function clearBoard () {
    container.childNodes.forEach(elem => {
        elem.style.backgroundColor = 'red';
    });
}

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