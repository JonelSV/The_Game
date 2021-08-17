let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comuter-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result")
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");


function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];

}

function win() {
    console.log("win")
}

function lose() {
    console.log("lose")
}

function draw() {
    console.log("draw")
}


function game(userChoice){
    const computerChoice = getComputerChoice();
    // console.log("you selected" + ' ' + userChoice)
    // console.log("computer choice" +' '+ computerChoice)

    switch(userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            // console.log ("USER WINS");
            win()
            break;
        case "rp":
        case "ps":
        case "sr":
            // console.log ("USER LOSES");
            lose()
            break;
        case "rr":
        case "pp":
        case "ss":
            // console.log ("IT'S A DRAW");
            draw()
            break;
    }
}




function main(){

    rock_div.addEventListener('click', function() {
        game("r");
    });

    paper_div.addEventListener('click', function() {
        game("p");
    });

    scissor_div.addEventListener('click', function() {
        game("s");
    });

}

main()