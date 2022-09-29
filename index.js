const button = document.querySelector('#clear');
const container = document.querySelector('#container');

button.addEventListener('click', () => {
    container.childNodes.forEach(elem => {
        elem.style.backgroundColor = 'red';
    });
});

for (let i = 0; i < 16; i++) {
    for (let i = 0; i < 16; i++) {
        let newDiv = document.createElement('div');
        // newDiv.style.display = 'inline-block';
        newDiv.style.backgroundColor = 'red';
        newDiv.style.border = '1px solid black';
        newDiv.style.display = 'inline-block';
        newDiv.style.height = '10px';
        newDiv.style.width = '10px';
        newDiv.addEventListener('mouseover', e => {
            e.target.style.backgroundColor = 'black';
        });
        container.appendChild(newDiv);
    }
}