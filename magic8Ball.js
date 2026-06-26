// Magic 8 ball app with control flow
//create a variable userName and give it a prompt
var userName = prompt('What is your name?')
// console.log (userName)
if (userName) {
    console.log ('Hello ' + userName + '!')
} else {
    console.log ('Hello!')
}

//create a variable userQuestion and give it a prompt
var userQuestion = prompt('Please ask a question!')
console.log ('' + userQuestion, userName + '?')

//create a variable randomNumber and set it to math.floor and math.random expressions
var randomNumber = Math.floor(Math.random() * 8)
// console.log (randomNumber);
var eightBall = '';

//if/else statement for control flow 
if (randomNumber === 0) {
    eightBall = 'Better not to tell you now';
} else if (randomNumber === 1) {
    eightBall = 'Concentrate and ask again';
} else if (randomNumber === 2) {
    eightBall = 'Reply hazy try again';
} else if (randomNumber === 3) {
    eightBall = 'Cannot predict now';
} else if (randomNumber === 4) {
    eightBall = 'Unreasonable request';
} else if (randomNumber === 5) {
    eightBall = 'My sources say no';
} else if (randomNumber === 6) {
    eightBall = 'Outlook not so good';
} else {
    eightBall = 'Signs point to yes';
}

//switch case for control flow
// switch (randomNumber) {
//     case 0:
//         eightBall = 'Better not to tell you now';
//         break;
//     case 1:
//         eightBall = 'Concentrate and ask again';
//         break;
//     case 2:
//         eightBall = 'Reply hazy try again';
//         break;
//     case 3:
//         eightBall = 'Cannot predict now';
//         break;
//     case 4:
//         eightBall = 'Unreasonable request';
//         break;
//     case 5:
//         eightBall = 'My sources say no';
//         break;
//     case 6:
//         eightBall = 'Outlook not so good';
//         break;
//     case 7:
//         eightBall = 'Signs point to yes';
//         break;
// }

console.log ('The Magic 8-ball says: ' + eightBall)