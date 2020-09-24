/*

This code is developed by Abhijith S Pillai

 */

var number;
var activeplayer = 0;
var currentScore = 0;
var globalScore = [0, 0];
var dieElment = document.querySelector(".dice");
var playingState = true;

int();

document.querySelector(".btn-roll").addEventListener("click", function() {
    //generate random number
    number = Math.floor(Math.random() * 6) + 1;
    currentScore = currentScore + number;
    if (playingState) {
        // check condition
        if (number !== 1) {
            document.querySelector(
                "#current-" + activeplayer
            ).textContent = currentScore;
            dieElment.style.display = "block";
            dieElment.src = "dice-" + number + ".png";
        } else {
            nxtPlyer();
        }
    }
});

document.querySelector(".btn-hold").addEventListener("click", function() {
    globalScore[activeplayer] = globalScore[activeplayer] + currentScore;
    document.querySelector("#score-" + activeplayer).textContent =
        globalScore[activeplayer];
    if (globalScore[activeplayer] >= 100) {
        document.querySelector("#name-" + activeplayer).textContent = "Winner";
        document
            .querySelector(".player-" + activeplayer + "-panel")
            .classList.add("winner");
        document
            .querySelector(".player-" + activeplayer + "-panel")
            .classList.remove("active");
        playingState = false;
        currentScore = 0;
    } else {
        nxtPlyer();
    }
});

// next player function
function nxtPlyer() {
    // next player
    dieElment.src = "dice-" + number + ".png";
    activeplayer === 0 ? (activeplayer = 1) : (activeplayer = 0);
    currentScore = 0;
    // toggle the player
    //document.querySelector('.player-' + activeplayer + '-panel').classList.toggle('active');
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
}

document.querySelector(".btn-new").addEventListener("click", function() {
    int();
});

function int() {
    activeplayer = 0;
    document.querySelector("#current-0").textContent = "0";
    document.querySelector("#current-1").textContent = "0";
    document.querySelector("#score-0").textContent = "0";
    document.querySelector("#score-1").textContent = "0";
    document.querySelector(".player-0-panel").classList.add("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector("#name-0").textContent = "Player 1";
    document.querySelector("#name-1").textContent = "Player 2";
    dieElment.style.display = "none";
    playingState = true;
    currentScore = 0;
    globalScore = [0, 0];
}