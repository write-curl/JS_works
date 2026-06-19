//Functions lab
//create a function using a parameter and an argument
function goodMorningNeighbor(firstName) {
    return 'Good morning, ' + firstName + '!';
}
//console.log (goodMorningNeighbor('James'))
//create a function using two parameters and arguments
function goodEveningNeighbor(firstName, task) {
    return 'Good evening, ' + firstName + '. Thanks for ' + task + '!';
}
//console.log (goodEveningNeighbor('James', 'the help'))
//Regular function
function knockKnock() {
    return 'Who\'s there?';
}
console.log (knockKnock())
//Function expression
var knockKnock = function() {
    return 'Who\'s there?';
}
console.log (knockKnock())
//IIFE immediately invoked function expression
console.log (function(person, dog) {
    return person + ' is taking ' + dog + ' for a walk.';
}('Steve', 'Basil'));
//IIFE wrapped in variable
var whoWalks = (function(person, dog) {
    return person + ' is taking ' + dog + ' for a walk.';
}('Steve', 'Basil'));
console.log (whoWalks)
