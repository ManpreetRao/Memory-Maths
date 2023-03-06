const numberOne = document.querySelector('.number1');
const numberTwo = document.querySelector('.number2');
const answer = document.querySelector('.answer');
const score = document.querySelector('.score');

let number1 = 0;
let number2 = 0;
let isHigherThanOne = false;
let currentScore = 0;
let lives = 3000;
let highScore = 0;

//A function to validate whether the answer was correct
async function buttonClicked(guess) {
    if (guess === 'higher') {
        if (isHigherThanOne) {
            result.innerHTML = 'Correct!';
            currentScore = ++currentScore;
            lives = lives + 250;
        } else {
            result = 'Wrong :(';
            lives = lives - 500;
        }
    }

     if (guess === 'lower') {
        if (isHigherThanOne) {
            result = 'Wrong :(';
            lives = lives - 500;
        } else {
            result = 'Correct!';
            currentScore = ++currentScore;
            lives = lives + 250;
        }
    }

    score.innerHTML = currentScore  
    answer.innerHTML = result;

    await giveResult()

    gameLoop()
}

async function giveResult(result) {
    await setTimeout(() => {
        answer.innerHTML = '';
    }, 750)
}

//A function to randomise the numbers for first 5 levels
function randomiseIntEasy(max) {
    return Math.floor(Math.random() * (max + 1));

}

//A function to check if number 2 is higher than number 1
function isHigher (number1, number2) {
    return number2 > number1;
}

//A function to allow you to reset the game score
function resetScore() {
    currentScore = 0;
    lives = 3000;
    score.innerHTML = currentScore;
    document.querySelector('.container').style.visibility = "visible";
    document.querySelector('.result').style.visibility = "hidden";
    gameLoop()
}

//A function to insert the randomised numbers into the index file
function gameLoop() {
    if (lives < 100) {
        document.querySelector('.container').style.visibility = "hidden";
        document.querySelector('.result').style.visibility = "visible";
        document.querySelector('#result-text').innerHTML = `<p>Awww.. You ran out of lives :(<br>Great attempt! You scored ${currentScore} points</p><br><p>Your high score is ${highScore}</p>`
    }
    number1 = randomiseIntEasy(10000);
    number2 = randomiseIntEasy(10000);
    
    numberOne.innerHTML = number1;
    numberTwo.innerHTML = number2;
    isHigherThanOne = isHigher(number1, number2);
    document.querySelector('#exact-lives').innerHTML = (lives / 1000);
    if (highScore === 0) {
        highScore = currentScore;
    } else if (highScore < currentScore) {
        highScore = currentScore;
    }
}

gameLoop()
