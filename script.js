let board = [];
let start = [];
let id = 0;
let rightOne = 0;
let leftOne = 0;
let topOne = 0;
let bottomone = 0;
let counterI = 20;
let gameNum = 0;

const boardHolder = document.querySelector(".board");
for (let i = 0; i < 100; i++) {
    const square = document.createElement("div");
    square.className = "square";
    square.id = i;
    boardHolder.appendChild(square);
}

const endGame = () => {
    if (document.querySelector(".counter").textContent == "You Win") {
        gameNum ++;
        counterI = 20 - gameNum;
    } else {
        gameNum = 0;
        counterI = 20;
    }
}


const counter = () => {
    counterI --;
    document.querySelector(".counter").textContent = counterI;
    if (start.length == 100){
        document.querySelector(".counter").textContent = "You Win";
    } else if (counterI == -1) {
        document.querySelector(".counter").textContent = "You lose";
    }
}


const randomise = (colors=5) => {
    board = document.querySelectorAll(".square");
    start = [board[0]];

    for (let i = 0; i < board.length; i++) {

        let randomInt = Math.floor(Math.random() * colors) + 1;
        let color = "";
        switch (randomInt) {
            case 1:
                color = "blue";
                break;

            case 2:
                color = "red";
                break;

            case 3:
                color = "green";
                break;

            case 4:
                color = "yellow";
                break;

            case 5:
                color = "white";
                break;

            default:
                color = "black";
                break;
        }
        board[i].style.backgroundColor = color;
    }
}


const drench = () => {
    console.log(Date.now());
    
    for (let i = 0; i < board.length; i++) {
        rightOne = i + 1;
        leftOne = i - 1;
        topOne = i - 10;
        bottomOne = i + 10;


        for (let j = 0; j < start.length; j++) {

            id = parseInt(start[j].id);


            if  (board[rightOne] != undefined && (rightOne != 10 || rightOne != 20 || rightOne != 30 || rightOne != 40 ||rightOne != 50 || rightOne != 60 || rightOne != 70 || rightOne != 80 || rightOne != 90)) {
                if (parseInt(board[rightOne].id) == id + 1) {
                    if (board[rightOne].style.backgroundColor == start[0].style.backgroundColor) {
                        if (start.includes(board[rightOne]) == false) {
                            start.push(board[rightOne]);
                        }
                    }
                }
            }

            if (board[leftOne] != undefined && (leftOne != 9 && leftOne != 19 && leftOne != 29 && leftOne != 39 && leftOne != 49 && leftOne != 59 && leftOne != 69 && leftOne != 79 && leftOne != 89 && leftOne != 99)) {
                if (parseInt(board[leftOne].id) == id - 1) {
                    if (board[leftOne].style.backgroundColor == start[0].style.backgroundColor) {
                        if (start.includes(board[leftOne]) == false) {
                            start.push(board[leftOne]);
                        }
                    }
                }
            }


            if (board[topOne] != undefined) {
                if (parseInt(board[topOne].id) == id - 10) {
                    if (board[topOne].style.backgroundColor == start[0].style.backgroundColor) {
                        if (start.includes(board[topOne]) == false) {
                            start.push(board[topOne]);    
                        }
                    }
                }
            }


            if (board[bottomOne] != undefined) {
                if (parseInt(board[bottomOne].id) == id + 10) {
                    if (board[bottomOne].style.backgroundColor == start[0].style.backgroundColor) {
                        if (start.includes(board[bottomOne]) == false) {
                            start.push(board[bottomOne]);
                        }
                    }
                }
            }
        }
    }
    console.log(Date.now());
}
addEventListener("DOMContentLoaded", () => {
    randomise();


    document.querySelector(".buttons .blue").addEventListener("click", () => {
        drench();
        counter();
        for (let index = 0; index < start.length; index++) {
            start[index].style.backgroundColor = "blue";
        }
        drench();
    });

    document.querySelector(".buttons .green").addEventListener("click", () => {
        drench();
        counter();
        for (let index = 0; index < start.length; index++) {
            start[index].style.backgroundColor = "green";
        }
        drench();
    });

    document.querySelector(".buttons .red").addEventListener("click", () => {
        drench();
        counter();
        for (let index = 0; index < start.length; index++) {
            start[index].style.backgroundColor = "red";
        }
        drench();
    });

    document.querySelector(".buttons .yellow").addEventListener("click", () => {
        drench();
        counter();
        for (let index = 0; index < start.length; index++) {
            start[index].style.backgroundColor = "yellow";
        }
        drench();
    });

    document.querySelector(".buttons .white").addEventListener("click", () => {
        drench();
        counter();
        for (let index = 0; index < start.length; index++) {
            start[index].style.backgroundColor = "white";
        }
        drench();
    });

    document.querySelector(".counter").addEventListener("click", () => {
        endGame();
        randomise();
        document.querySelector(".counter").textContent = counterI;
        
    });

    drench();
});


