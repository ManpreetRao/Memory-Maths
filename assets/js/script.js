const numberOne = document.querySelector('.number1');
const numberTwo = document.querySelector('.number2');


function buttonClicked(guess) {
    if (guess === 'higher') {
        console.log('higher')
    } else if (guess === 'lower') {
        console.log('lower')
    }
}

function randomiseInt(max) {
    return Math.floor(Math.random() * (max + 1));

}

let number1 = randomiseInt(10000);
let number2 = randomiseInt(10000);

numberOne.innerHTML = number1;
numberTwo.innerHTML = number2;