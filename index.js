for (let i = 0; i < 16; i++) {
    
    for (let i = 0; i < 16; i++) {
        let newDiv = document.createElement('div');
        // newDiv.style.display = 'inline-block';
        newDiv.style.backgroundColor = 'red';
        newDiv.style.border = '1px solid black';
        newDiv.style.display = 'inline-block';
        newDiv.style.height = '10px';
        newDiv.style.width = '10px';
        (document.querySelector('#container')).appendChild(newDiv);
    }
}