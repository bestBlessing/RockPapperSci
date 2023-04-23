let wins = 0
let loss = 0
let ties = 0

var myArray = ["R", "P", "S"];

function playGame(){
    let myChoice = prompt("Enter R, P, or S:")
    myChoice = myChoice.toUpperCase()

let randomItem = myArray[Math.floor(Math.random()*myArray.length)];
computerChoice = randomItem.toUpperCase()

alert("The computer choses: " + computerChoice)
if(myChoice === computerChoice){
    ties++
    alert("It is a tie")
}else if((myChoice === 'R' && computerChoice !== "S") || (myChoice === 'P' && computerChoice !== "R") || (myChoice === 'S' && computerChoice !== "P")){
    loss++
    alert("Computer wins")
} else {
    wins++
    alert("you win!!!")
 }

 alert([
"Stats \n" +
 "Wins: "+ wins + "\n" +
 "Losses: " + loss + "\n" +
 "Ties: " + ties  
])

let willPlayAgain = confirm("Play again?")

if(willPlayAgain){
    playGame()
}

}

playGame()
