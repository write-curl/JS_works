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
//console.log (knockKnock())

//Function expression
var knockKnock = function() {
    return 'Who\'s there?';
}
//console.log (knockKnock())

//IIFE: immediately invoked function expression
console.log (function(person, dog) {
    return person + ' is taking ' + dog + ' for a walk.';
}('Steve', 'Basil'));

//IIFE wrapped in a variable
var whoWalks = (function(person, dog) {
    return person + ' is taking ' + dog + ' for a walk.';
}('Steve', 'Basil'));
//console.log (whoWalks)

//Global and local scope
function roadTrip() {
    var gallons = 12;
    var mpg = 34;
    return gallons * mpg;
}
//console.log (roadTrip())
//Move variables to local scope
var gallons = 12;
var mpg = 34;
function roadTrip() {
    return gallons * mpg;
}
//console.log (gallons)
//console.log (mpg)
//console.log (roadTrip())

//Nested function, child scope => parent scope => global scope
//global scope
var gallons = 408;
function roadTrip() {
    //parent scope
    var miles = 12
    var mpg = function() {
        //child scope
        return gallons / miles;
    };
    return mpg();
}
console.log (roadTrip())
