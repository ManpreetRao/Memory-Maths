const numberOne = document.querySelector('.number1');
const numberTwo = document.querySelector('.number2');

let number1 = 0;
let number2 = 0;
let isHigherThanOne = false;

//A function to validate whether the answer was correct
function buttonClicked(guess) {
    if (guess === 'higher') {
        if (isHigherThanOne) {
            console.log('Correct')
        } else {
            console.log('Wrong')
        }
    }

     if (guess === 'lower') {
        if (isHigherThanOne) {
            console.log('Wrong')
        } else {
            console.log('Correct')
        }
    }
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

