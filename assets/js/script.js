const numberOne = document.querySelector('.number1')
const numberTwo = document.querySelector('.number2')

function buttonClicked(guess) {
    if (guess === 'higher') {
        console.log('higher')
    } else if (guess === 'lower') {
        console.log('lower')
    }
}