let container = document.querySelector('.container')
let changer = document.getElementsByClassName('.column')

let number = 0

function makeGrid(number) {
    for (let i = 0; i<number; i++)
        {let row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
            for (let j=0; j<number; j++)
            {let column = document.createElement('div')
            column.classList.add('column')
            row.appendChild(column)}}
}

makeGrid(50);
