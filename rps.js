/*
    Goal: Create a Rock, Paper, Scissors game in console

    Pseudo code
    1. Create a function that will randomly return "Rock", "Paper", or "Scissors" (named getComputerChoice)
    2. Create a function that will be called to capture the human's choice (named getHumanChoice)
        2a. This function should check that the human's input is a valid choice.
    3. Keep track of the human's score and the computer's score (two variables, one named humanScore, the other named computerScore)
    4. Write a function to play a round of "Rock, Paper, Scissors" (named playRound)
    4. Write a function to start the game and go to 5 rounds (named playGame). The first to 5 wins will then be declared the winner.

*/

function getComputerChoice() {
    let randomNumber = Math.random();
    let computerChoice;  

    if (randomNumber <= 0.32) {
        computerChoice = "ROCK";
    } else if (randomNumber > 0.32 && randomNumber <= 0.66){
        computerChoice = "PAPER";
    } else {
        computerChoice = "SCISSORS";
    }

    return computerChoice;
}

function capitalizeResponse(currentResponse){
    return currentResponse.replace(currentResponse.at(0),currentResponse.at(0).toUpperCase()).at(0) + currentResponse.toLowerCase().slice(1);
}

function getHumanChoice() {
    let promptMessage = "Rock, Paper, Scissors!";
    let humanChoice = prompt(promptMessage);

    humanChoice = humanChoice.toUpperCase();

    if (humanChoice === "ROCK") {
        return humanChoice;
    } else if (humanChoice === "PAPER") {
        return humanChoice;
    } else if (humanChoice === "SCISSORS") {
        return humanChoice;
    } else {
        alert("Something you typed didn't match 'Rock', 'Paper', or 'Scissors'. Defaulted to 'Rock'. Fingers crossed!");
        return "ROCK";
    }
}

function playGame(){
    let roundCount = 0;
    let humanScore = 0;
    let computerScore = 0;

    function playRound() {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
    
        let loseMessage = "You lose! " + capitalizeResponse(computerChoice) + " beats " + capitalizeResponse(humanChoice);
        let winMessage = "You win! " + capitalizeResponse(humanChoice) + " beats " + capitalizeResponse(computerChoice);
    
        if ((computerChoice === "ROCK" && humanChoice === "SCISSORS") || 
        (computerChoice === "PAPER" && humanChoice === "ROCK") ||
        (computerChoice === "SCISSORS" && humanChoice === "PAPER")) {
            computerScore += 1;
            console.log(loseMessage);
            let alertMessage = loseMessage + '. Current score: ' + humanScore + ' - ' + computerScore;
            alert(alertMessage);            
            return "Comp";
        } else if (computerChoice === humanChoice){
            console.log("Draw! You both picked " + capitalizeResponse(humanChoice) + ". This round doesn't count!");
            alert("Draw! You both picked " + capitalizeResponse(humanChoice) + ". This round doesn't count!");
            return "Draw";
        } 
        else {
            humanScore += 1;
            console.log(winMessage);
            let alertMessage = winMessage + '. Current score: ' + humanScore + ' - ' + computerScore;
            alert(alertMessage);            
            return "Human";
        }

    }

    while (roundCount < 5){
        let currentRound = playRound();
        if (currentRound != "Draw") {
            ++roundCount;
        } 
        if (computerScore >= 3 || humanScore >= 3){
            break;
        } 
    }

    if (computerScore > humanScore) {
        console.log("The computer wins!");
        alert("The computer wins!" + " End score: " + humanScore + " - " + computerScore);
    } else {
        console.log("You win!");
        alert("You win!" + " End score: " + humanScore + " - " + computerScore);
    }
}




