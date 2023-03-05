const numberOne = document.querySelector('.number1');
const numberTwo = document.querySelector('.number2');
const answer = document.querySelector('.answer');
const score = document.querySelector('.score');

let number1 = 0;
let number2 = 0;
let isHigherThanOne = false;
let currentScore = 0;

//A function to validate whether the answer was correct
function buttonClicked(guess) {
    if (guess === 'higher') {
        if (isHigherThanOne) {
            result = 'Correct!'
            currentScore = ++currentScore
        } else {
            result = 'Wrong :('
        }
    }

     if (guess === 'lower') {
        if (isHigherThanOne) {
            result = 'Wrong :('
        } else {
            result = 'Correct!'
            currentScore = ++currentScore
        }
    }

    score.innerHTML = currentScore
    answer.innerHTML = result

    gameLoop()
}

//A function to randomise the numbers
function randomiseInt(max) {
    return Math.floor(Math.random() * (max + 1));

}

//A function to check if number 2 is higher than number 1
function isHigher (number1, number2) {
    return number2 > number1;
}

//A function to insert the randomised numbers into the index file
function gameLoop() {
    number1 = randomiseInt(10000);
    number2 = randomiseInt(10000);
    
    numberOne.innerHTML = number1;
    numberTwo.innerHTML = number2;
    isHigherThanOne = isHigher(number1, number2);
}

gameLoop()

