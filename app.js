let userScore = 0;
let computerScore = 0;
let userRoundScore = 0;
let computerRoundScore = 0;
const userRound_div = document.getElementById("user-round-score");
const computerRound_div = document.getElementById("computer-round-score");
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p")
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

// get random computer choice.
function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];

}
// function to convert initial parameters in order to reflect the 
// full words, ROCK PAPER SCISSOR on the output screen

function convert(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

// output win results

function win(userChoice, computerChoice) {
    const smallUserWord = "Player".fontsize(5).toUpperCase();
    const smallCompWord = "Computer".fontsize(5).toUpperCase();
    const userGlow = document.getElementById(userChoice)
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${smallUserWord} \u00A0\u00A0 ${convert(userChoice)}\u00A0\u00A0 WON AGAINST\u00A0\u00A0 ${smallCompWord}\u00A0\u00A0 ${convert(computerChoice)}`;
    userGlow.classList.add('glow1');
    setTimeout(function(){userGlow.classList.remove('glow1')}, 500)
    if(userScore == 5){
        userRoundScore++
        userRound_div.innerHTML = userRoundScore;
    }else if(userScore == 10){
        userRoundScore++
        userRound_div.innerHTML = userRoundScore;
    }else if(userScore == 15){
        userRoundScore++
        userRound_div.innerHTML = userRoundScore;
    }
    if(userRoundScore === 3) {
        endGame()
    }
}

// output lose results

function lose(userChoice, computerChoice) {
    const smallUserWord = "Player".fontsize(5).toUpperCase();
    const smallCompWord = "Computer".fontsize(5).toUpperCase();
    const userGlow = document.getElementById(userChoice)
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${smallUserWord} \u00A0\u00A0 ${convert(userChoice)}\u00A0\u00A0LOST TO\u00A0\u00A0 ${smallCompWord}\u00A0\u00A0 ${convert(computerChoice)}`;
    userGlow.classList.add('glow2');
    setTimeout(function(){userGlow.classList.remove('glow2')}, 500)
    if(computerScore == 5){
        computerRoundScore++
        computerRound_div.innerHTML = computerRoundScore;
    }else if(computerScore == 10){
        computerRoundScore++
        computerRound_div.innerHTML = computerRoundScore;
    }else if(computerScore == 15){
        computerRoundScore++
        computerRound_div.innerHTML = computerRoundScore;
    }
    if(computerRoundScore === 3) {
        endGame2()
    }

}

// draw function and output results

function draw(userChoice, computerChoice) {
    const smallUserWord = "Player".fontsize(5).toUpperCase();
    const smallCompWord = "Computer".fontsize(5).toUpperCase();
    const userGlow = document.getElementById(userChoice)
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${smallUserWord} \u00A0\u00A0 ${convert(userChoice)} \u00A0\u00A0 IS A DRAW AGAINST \u00A0\u00A0 ${smallCompWord} \u00A0\u00A0 ${convert(computerChoice)}\u00A0\u00A0 --> IT IS A DRAW!`;
    userGlow.classList.add('glow3');
    setTimeout(function(){userGlow.classList.remove('glow3')}, 500)

}

// function to determine if it is a win, a lose or a draw

function game(userChoice){
    const computerChoice = getComputerChoice();
    
    switch(userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            // console.log ("USER WINS");
            win(userChoice , computerChoice)
            break;
        case "rp":
        case "ps":
        case "sr":
            // console.log ("USER LOSES");
            lose(userChoice , computerChoice)
            break;
        case "rr":
        case "pp":
        case "ss":
            // console.log ("IT'S A DRAW");
            draw(userChoice , computerChoice)
            break;
    }
}


// funciton for picking RPS choice

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

main();


// function to check the end of the game, pop up prompt
endGame = () => {
    let finish = document.getElementById("end")
    finish.classList.add("active")
}

// when continue button is clicked, the prompt disappears

const continueButton = document.getElementById('continue_button')
let finish = document.getElementById("end")
continueButton.addEventListener('click', () =>{
    finish.classList.remove("active")
})


endGame2 = () => {
    let loss = document.getElementById("end2")
    loss.classList.add("active2")
}

const continueButton2 = document.getElementById('continue_button2')
let loss = document.getElementById("end2")
continueButton2.addEventListener('click', () =>{
    loss.classList.remove("active2")
})




// // Modal added
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}








