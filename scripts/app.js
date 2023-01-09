let color = 'black';
let click = true;


function createBoard (size) {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    for (i = 0; i < amount; ++i) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare);
        square.style.backgroundColor = "white";
        board.insertAdjacentElement("beforeend", square);
    }
}

createBoard(16);


//helper functions
function changeSize(input){
    createBoard(input);
}

function colorSquare(){
    if(click) {
        if (color === 'random') {
            this.style.backgroundColor = `#` + `${Math.floor(Math.random()*16777215).toString(16)}`;
        } else {
            this.style.backgroundColor = color;
        }
    }
}

function changeColor(choice){
    color = choice;
}

function resetBoard(){
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white');
}

document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.tagName != "BUTTON") {
        click = !click;
        if (click) {
            document.querySelector('.mode').textContent = 'Pen: ON';
        } else {
            document.querySelector('.mode').textContent = 'Pen: OFF';
        }
    }
    console.log(click);
})