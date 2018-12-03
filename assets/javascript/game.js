// psychic game javascript

// variables for letters a through z
const alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

// wrong letter array
let wrongLetterArray = [];

// game variables for screen display and counters
let wins = 0;
let losses = 0;
let guessLeft = 10;
let guessSoFar = 0;

// input by user
document.addEventListener('keypress', (event) => {
    let playerKeyCode = event.keyCode;
    let playerKeyCodeConverted = String.fromCharCode(playerKeyCode);

    // computers random leter generator
    let randomNumber = Math.floor(Math.random() * alphabetArray.length);
    let psychicLetter = alphabetArray[randomNumber];

    // winning match for true
    if (playerKeyCodeConverted == psychicLetter) {
        alert("You Win!");
        wins++;
        guessLeft = 10;
        wrongLetterArray = [];
    } else {
        // add the incorrect letter to the wrongLetterArray and decrease the amount of guesses left
        wrongLetterArray.push(playerKeyCodeConverted);
        guessLeft--;
        guessSoFar++;
    }

    // after 10 consecutive incorrect guesses the player loses
    if (guessLeft === 0) {
        alert("You Lose! Try again.");
        guessSoFar = 0;
        guessLeft = 10;
        losses++;
        wrongLetterArray = [];
    }

    // updates the screen for Document Object Model (DOM)
    document.getElementById("countWins").innerHTML = (wins);
    document.getElementById("countLosses").innerHTML = (losses);
    document.getElementById("countGuessLeft").innerHTML = (guessLeft);
    document.getElementById("countGuessSoFar").innerHTML = (wrongLetterArray);
});