//Define Variables
const userRound = document.getElementById("user-round-score");
const computerRoundz = document.getElementById("computer-round-score");
const userScoreDisplay = document.getElementById("user-score");
const computerScoreDisplay = document.getElementById("computer-score");
const resultDisplay = document.querySelector(".result > p")
const rockChoice = document.getElementById("r");
const paperChoice = document.getElementById("p");
const scissorChoice = document.getElementById("s");
let userScore = 0;
let computerScore = 0;
let userRoundScore = 0;
let computerRoundScore = 0;

// get random computer choice.
randomComputerChoice =()=>{
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];

}
// function to convert initial parameters in order to reflect the 
// full words, ROCK PAPER SCISSOR on the output screen

translate = (userSelection) => {
    if (userSelection === "r") return "Rock";
    if (userSelection === "p") return "Paper";
    return "Scissors";
}

// output win results
// round check/update every 5 points
// end game function added at the end

win = (userChoice, computerChoice) => {
    const playerUpCase = "Player".fontsize(5).toUpperCase();
    const computerUpCase = "Computer".fontsize(5).toUpperCase();
    const userGlow = document.getElementById(userChoice)
    userScore++;
    userScoreDisplay.innerHTML = userScore;
    computerScoreDisplay.innerHTML = computerScore;
    resultDisplay.innerHTML = `${playerUpCase} \u00A0\u00A0 ${translate(userChoice)}\u00A0\u00A0 WON AGAINST\u00A0\u00A0 ${computerUpCase}\u00A0\u00A0 ${translate(computerChoice)}`;
    userGlow.classList.add('glow1');
    setTimeout(function(){userGlow.classList.remove('glow1')}, 500)
    if(userScore == 5){
        userRoundScore++
        userRound.innerHTML = userRoundScore;
        roundCheck()
    }else if(userScore == 10){
        userRoundScore++
        userRound.innerHTML = userRoundScore;
        roundCheck()
    }else if(userScore == 15){
        userRoundScore++
        userRound.innerHTML = userRoundScore;
    }else if(userScore == 20){
        userRoundScore++
        userRound.innerHTML = userRoundScore;
        roundCheck()
    }
    if(userRoundScore === 3) {
        endGame()
    }
}

// output lose results
// round check/update every 5 points
// end game function added at the end


lose = (userChoice, computerChoice) => {
    const playerUpCase = "Player".fontsize(5).toUpperCase();
    const computerUpCase = "Computer".fontsize(5).toUpperCase();
    const userGlow = document.getElementById(userChoice)
    computerScore++;
    userScoreDisplay.innerHTML = userScore;
    computerScoreDisplay.innerHTML = computerScore;
    resultDisplay.innerHTML = `${playerUpCase} \u00A0\u00A0 ${translate(userChoice)}\u00A0\u00A0LOST TO\u00A0\u00A0 ${computerUpCase}\u00A0\u00A0 ${translate(computerChoice)}`;
    userGlow.classList.add('glow2');
    setTimeout(function(){userGlow.classList.remove('glow2')}, 500)
    if(computerScore == 5){
        computerRoundScore++
        computerRoundz.innerHTML = computerRoundScore;
        roundCheck()
    }else if(computerScore == 10){
        computerRoundScore++
        computerRoundz.innerHTML = computerRoundScore;
        roundCheck()
    }else if(computerScore == 15){
        computerRoundScore++
        computerRoundz.innerHTML = computerRoundScore;
    }else if(userScore == 20){
        userRoundScore++
        userRound.innerHTML = userRoundScore;
        roundCheck()
    }
    if(computerRoundScore === 3) {
        endGame2()
    }

}

// draw function and output results

draw = (userChoice, computerChoice) => {
    const playerUpCase = "Player".fontsize(5).toUpperCase();
    const computerUpCase = "Computer".fontsize(5).toUpperCase();
    const userGlow = document.getElementById(userChoice)
    userScoreDisplay.innerHTML = userScore;
    computerScoreDisplay.innerHTML = computerScore;
    resultDisplay.innerHTML = `${playerUpCase} \u00A0\u00A0 ${translate(userChoice)} \u00A0\u00A0 IS A DRAW AGAINST \u00A0\u00A0 ${computerUpCase} \u00A0\u00A0 ${translate(computerChoice)}\u00A0\u00A0 --> IT IS A DRAW!`;
    userGlow.classList.add('glow3');
    setTimeout(function(){userGlow.classList.remove('glow3')}, 500)

}

// function to determine if it is a win, a lose or a draw

game = (userChoice) => {
    const computerChoice = randomComputerChoice();
    
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

main = ()=>{

    rockChoice.addEventListener('click', function() {
        game("r");
    });

    paperChoice.addEventListener('click', function() {
        game("p");
    });

    scissorChoice.addEventListener('click', function() {
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

// Round Cheker
roundCheck = () => {
    let rCheck = document.getElementById("roundCheckID")
    rCheck.classList.add("active")
}

const check = document.getElementById('roundCheckButton')
let rCheck = document.getElementById('roundCheckID')
check.addEventListener('click', () => {
    rCheck.classList.remove('active')
})


// // Modal added for rules
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

openModal = (modal)=> {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

closeModal = (modal)=> {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}








