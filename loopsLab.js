// Loops exercise, change the examples below from false to true.
// (5>7)
// (7 === '7')
// (7 === 'seven')
// (false)

//solutions
console.log (5<7)
console.log (7 == '7')
console.log (7 != 'seven')
console.log (true)

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




