//switch case syntax example
// switch(expression) {
//     case a:
//         code block;
//         break;
//     case b:
//         code block;
//         break;
//     case c:
//         code block;
//         break;
//     default:
//         code block;

//create a switch statement with evaluation value between 1-6 (dice role)
//math.floor and math.random methods to create a random number for the dice
var diceRoll = Math.floor(Math.random() * 7);
// console.log(diceRoll)
//can also pass math.floor argument into the switch expression
switch(diceRoll) {
    case 1:
        console.log ('lol nice try');
        break;
    case 2:
        console.log ('not quite');
        break;
    case 3:
        console.log ('not slaying dragons there');
        break;
    case 4:
        console.log ('above the mendoza line');
        break;
    case 5:
        console.log ('good toss up and over');
        break;
    case 6:
        console.log ('rollin into the semis!');
        break;
    default:
        console.log ('click clack roll em baby');
        break;
}

