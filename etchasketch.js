let container = document.querySelector('.container')
let changer = document.querySelectorAll('.column')
let buttonPress = document.querySelector('.clearButton')
let inputNumber = document.getElementById('inputNumber')
let userSubmit = document.getElementById('submit')

userSubmit.addEventListener('click', makeGrid)
buttonPress.addEventListener('click', eraseGrid)

let number = 16

makeGrid(number)
pencil()

function makeGrid(number) {
    removeGrid()
    number = inputNumber.value 

if(number >= 1 || number <= 100) {
    for (let i = 0; i < number; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for (let j = 0; j < number; j++) {
            let column = document.createElement('div')
            column.classList.add('column')
            row.appendChild(column)
        }
    }
}
else if (number == 0 || number > 101 || isNaN(number)) {
    for (let i = 0; i < 20; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for (let j = 0; j < 20; j++) {
            let column = document.createElement('div')
            column.classList.add('column')
            row.appendChild(column)
        }
    }
}
}

pencil();

function pencil(){container.addEventListener(
    'mouseover', (event) => {event.target.style.backgroundColor = 'blue'})}


function eraseGrid() {
    let columns = document.querySelectorAll('.column');
    for (let i=0; i < columns.length; i++)
    {columns[i].style.backgroundColor = ''}
}

function removeGrid() {
    let row = document.querySelectorAll('.row')
    for (let i=0; i< row.length ; i++) {
        row[i].remove()
    }
}


