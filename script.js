const btnEl = document.querySelector('.btn');
const bodyEl = document.querySelector('BODY');

let prevColor

bodyEl.addEventListener('DOMContentLoaded', function() {
    prevColor = bodyEl.style.backgroundColor;
}() );

const colorArray = ['red', 'yellow', 'blue', 'grey', 'brown', 'white', 'black', 'purple', 'green'];

function pickAColor(){
    let index = Math.floor( Math.random() * colorArray.length);
    return colorArray[index];
}

function changeBackgroundColor() {
    let newColor = pickAColor();

    while (newColor === prevColor) {
        newColor = pickAColor();
    }

    bodyEl.style.backgroundColor = newColor;

    prevColor = newColor;
}

btnEl.addEventListener('click', changeBackgroundColor)