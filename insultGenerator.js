//Random insult generator mini project using arrays and methods
var randomBodyParts = ['neck', 'toe', 'finger', 'hip'];
//console.log (randomBodyParts)
var randomAdjectives = ['bored', 'cheeky', 'sharp', 'ludicrous'];
//console.log (randomAdjectives)
var randomWords = ['ripper', 'breeze', 'lychee', 'gimlet', 'wolf'];
//console.log (randomWords)
//Use math.floor() and math.random() methods on each variable
var randomBodyParts = randomBodyParts[Math.floor(Math.random() * 4)];
//console.log (randomBodyParts)
var randomAdjectives = randomAdjectives[Math.floor(Math.random() * 4)];
//console.log (randomAdjectives)
var randomWords = randomWords[Math.floor(Math.random() * 5)];
//console.log (randomWords)
//create a console.log statement that displays the randomly generated insult
console.log ('Your ' + randomBodyParts + ' is like a ' + randomAdjectives + ' ' + randomWords + '!!!')