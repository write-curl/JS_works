// Loops exercise, change the examples below from false to true.
// (5>7)
// (7 === '7')
// (7 === 'seven')
// (false)

//solutions
// console.log (5<7)
// console.log (7 == '7')
// console.log (7 != 'seven')
// console.log (true)

// use logical operators && and || to show four different code examples for each
// && (and), || (or)

// && solutions, one true and three false
console.log (5>2 && 10>8)
console.log (5>2 && 10<8)
console.log (5<2 && 10>8)
console.log (5<2 && 10<8)

// || solutions, three true and one false
console.log (5>3 || 9>7)
console.log (5>3 || 9<7)
console.log (5<3 || 9>7)
console.log (5<3 || 9<7)

// if/else statement example with at least one logical operator
var uvIndex = 4
if(uvIndex > 6) {
        console.log ('Index is high')
    } else if(uvIndex === 5) {
        console.log ('Index is moderate')
    } else if((uvIndex < 5) && (uvIndex > 1)) {
        console.log ('Index is low')
    } else {
        console.log ('It is night time')
    }

// create a while loop that runs 5x's
var runs = 1
while (runs < 7) {
    console.log ('The team has ' + (runs+1) + ' runs.');
    runs++;
}

// create a do/while loop that runs with a false expression
var x = 2
do {
    console.log('false expression.');
    x++;
    } while (x < 7);

// create a for loop with an array of 5 values, run each element through an if, else, else if clause with at least two else if options
var pitchSpeed = [101, 95, 97, 88, 92, 87, 94, 90, 99]

for (var i = 0; i < pitchSpeed.length; i++) {
    // console.log('This pitcher throws ' + pitchSpeed[i] + '.');
if (pitchSpeed[i] > 98) {
    console.log ('This pitcher throws heat')
    } else if (pitchSpeed[i] > 95) {
        console.log ('This pitcher has strikeout capability')
    } else if (pitchSpeed[i] > 92) {
        console.log ('This pitcher is sneaky')
    } else {
        console.log ('This pitcher throws meatballs.')
    }
}








