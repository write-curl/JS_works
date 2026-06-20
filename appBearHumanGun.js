//Get user's choice
//var userInput = ['bear', 'human', 'gun'];

function getUserChoice(userInput) {
    var userInput = userInput.toLowerCase();
    if (userInput === 'bear' || userInput === 'human' || userInput === 'gun') {
        return userInput;
    } else {
        return 'Please enter valid option';
    }
}
//console.log (getUserChoice('HUman'))

//Get computer's choice
function getComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'bear';
    } else if (randomNumber ===1) {
        return 'human';
    } else {
        return 'gun';
    }
    
}
//console.log (getComputerChoice())

//Compare the two choices and determine a winner
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'Tie, congrats you both live to see another day.'
    }
    if (userChoice === 'human') {
        if (computerChoice === 'bear') {
            return 'The clanker has mauled you.'
        } else {
            return 'Congrats you won!'
        }
    }
    if (userChoice === 'bear') {
        if (computerChoice === 'gun') {
            return 'the clanker shot first, you lose.'
        } else {
            return 'Congrats! You mauled them and won!'
        }
    }
    if (userChoice === 'gun') {
        if (computerChoice === 'human') {
            return 'The clanker has disarmed you. You lose.'
        } else {
            return 'Bang bang! You win!'
        }
    }
}
// console.log(determineWinner('bear', 'gun'));
// console.log(determineWinner('gun', 'human'));

//Start the program and display the results
function playGame() {
    var promptUserChoice = prompt('Please choose Bear, Human, or Gun.');
    var userChoice = getUserChoice(promptUserChoice);
    var computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}
console.log(playGame());