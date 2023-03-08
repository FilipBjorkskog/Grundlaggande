let r = false
let p = false
let s = false
let rock = false
let paper = false
let scissors = false
let losses = 1
let wins = 1
let ties = 1

function aiPick() {

    const rNumber = Math.floor(Math.random() * 3) + 1;
    if (rNumber == 1) {
        r = true
        document.querySelector('#Ai').innerText = "Rock"
        console.log(r + " R")
    }
    if (rNumber == 2) {
        p = true
        document.querySelector('#Ai').innerText = "Paper"
        console.log(p + " P")
    }
    if (rNumber == 3) {
        s = true
        document.querySelector('#Ai').innerText = "Scissors"
        console.log(s + " S")
    }
};

function Rock() {

    r = false
    p = false
    s = false

    aiPick();

    if (r == true) {
        document.getElementById('ties').innerText = ties;
        ties++;
    }
    if (p == true) {
        document.getElementById('losses').innerText = losses;
        losses++;
    }
    if (s == true) {
        document.getElementById('wins').innerText = wins;
        wins++;
    }
};

function Paper() {

    r = false
    p = false
    s = false

    aiPick();

    if (r == true) {
        document.getElementById('wins').innerText = wins;
        wins++;
    }
    if (p == true) {
        document.getElementById('ties').innerText = ties;
        ties++;
    }
    if (s == true) {
        document.getElementById('losses').innerText = losses;
        losses++;
    }
};


function Scissors() {

    r = false
    p = false
    s = false

    aiPick();

    if (r == true) {
        document.getElementById('losses').innerText = losses;
        losses++;
    }
    if (p == true) {
        document.getElementById('wins').innerText = wins;
        wins++;
    }
    if (s == true) {
        document.getElementById('ties').innerText = ties;
        ties++;
    }
};