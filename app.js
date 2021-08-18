let userScore = 1;
let computerScore = 1;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p")
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");


function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];

}

function convert(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}


function win(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    const userGlow = document.getElementById(userChoice)
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convert(userChoice)} ${smallUserWord}  beats ${convert(computerChoice)} ${smallCompWord}  'You win'`;
    userGlow.classList.add('glow1');
    setTimeout(function(){userGlow.classList.remove('glow1')}, 500)

}

function lose(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userGlow = document.getElementById(userChoice)
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convert(userChoice)} ${smallUserWord}  loses to ${convert(computerChoice)} ${smallCompWord}  'You lost'`;
    userGlow.classList.add('glow2');
    setTimeout(function(){userGlow.classList.remove('glow2')}, 500)

}


function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userGlow = document.getElementById(userChoice)
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convert(userChoice)} ${smallUserWord}  equals ${convert(computerChoice)} ${smallCompWord}  'It's a draw'`;
    userGlow.classList.add('glow3');
    setTimeout(function(){userGlow.classList.remove('glow3')}, 500)

}


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


function winner () {

}



// // Modal added
// const btn = document.querySelectorAll(".modal");
// const modalWrapper = document.querySelector(".modalWrapper");
// // check if it's working
// // console.log(btn)

// btn.forEach(function(button){

// // console.log(button)
//     makeClick(button)

// })

// function makeClick(x) {
//     x.addEventListener("click", function(){
//         // console.log("clicked")
//         modalWrapper.classList.add("showModal");
//         const closeButton = document.querySelector(".close");
//         closeButton.addEventListener("click", function(){
//             return modalWrapper.classList.remove("showModal")
//         })
//         modalWrapper.addEventListener("click", function(){
//             return modalWrapper.classList.remove("showModal")
//         })
//     })
// }

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



// const openModalButtons = document.querySelectorAll("[data-modal-target]")
// const closeModalButtons = document.querySelectorAll("[data-close-button]")
// const overlay = document.getElementById("overlay")

// openModalButtons.forEach(button => {
//     button.addEventListener("click", () => {
//         const modal = document.querySelector(button.dataset.modalTarget)
//         openModal(modal)
//     })
// })


// closeModalButtons.forEach(button => {
//     button.addEventListener("click", () => {
//         const modal = button.closest(".modal")
//         closeModal(modal)
//     })
// })

// function openModal(modal) {
//     if (modal == null) return
//     modal.classList.add("active")
//     overlay.classList.add("active")
// }


// function closeModal(modal) {
//     if (modal == null) return
//     modal.classList.remove("active")
//     overlay.classList.remove("active")
// }