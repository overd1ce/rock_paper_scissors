let playerWins = 0;
let computerWins = 0;
const maxPoints = 5;
let gameActive = true;

function computerPlay() {
    let responses = ["rock", "paper", "scissors"];
    return responses[Math.floor(Math.random() * 3)];
}

function showResult(resultString){
    const container = document.querySelector("#results");

    const result = document.createElement('div');
    result.classList.add('result');
    result.textContent = resultString;

    container.appendChild(result);
}

function playRound(e) {
    let playerSelection = this.id;
    let computerSelection = computerPlay();
    let result;
    let resultString;
    if (gameActive) {
        if (playerSelection == computerSelection) {
            resultString = "Tie!";
            result = "tie";
        }
        else if (playerSelection == "rock") {
            if (computerSelection == "scissors") {
                resultString = "You win! Rock beats scissors.";
                result = "win";
            }
            else if (computerSelection == "paper") {
                resultString = "You lose! Paper beats rock.";
                result = "lose";
            }
        }
        else if (playerSelection == "paper") {
            if (computerSelection == "rock") {
                resultString = "You win! Paper beats rock.";
                result = "win";
            }
            else if (computerSelection == "scissors") {
                resultString = "You lose! Scissors beat paper.";
                result = "lose";
            }
        }
        else if (playerSelection == "scissors") {
            if (computerSelection == "paper") {
                resultString = "You win! Scissors beat paper.";
                result = "win";
            }
            else if (computerSelection == "rock") {
                resultString = "You lose! Rock beats scissors.";
                result = "lose";
            }
        }
        showResult(resultString);
        addToScoreTally(result); 
        checkWinner();
    }   
}

function addToScoreTally(result) {
    if (result == 'win') {
        playerWins++;
    }
    else if (result == 'lose') {
        computerWins++;
    }
    showScore()
}

function showScore() {
    const container = document.querySelector("#scoreboard");

    // Remove the old score.
    const oldScore = document.getElementById("score")
    oldScore.parentNode.removeChild(oldScore);

    // Create and show new score.
    let scoreString = `Player: ${playerWins} Computer: ${computerWins}`;
    const score = document.createElement('div');
    score.id = 'score';
    score.textContent = scoreString;
    container.appendChild(score);
}

function checkWinner() {
    let winner;
    if (playerWins == maxPoints) {
        winner = 'player';
    }
    else if (computerWins == maxPoints) {
        winner = 'computer';
    }
    else {
        return;
    };
    showWinner(winner);
}

function showWinner(winner) {
    let winString;
    const winMsg = document.createElement('div');
    const container = document.querySelector("#results");
    winMsg.classList.add('win');

    if (winner == 'player') {
        winString = "Well played, you win!"
        winMsg.classList.add('win-player');
    }
    else if (winner == 'computer') {
        winString = "HA-HA, you lose!"
        winMsg.classList.add('win-computer');
    }

    winMsg.textContent = winString;
    container.appendChild(winMsg);
    gameActive = false;
}

function game(){
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', playRound);
    });
}

game();