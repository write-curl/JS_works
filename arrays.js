var testScores = [];
//elements of arrays
testScores = [72, 84, 68, 92, 74];
//index of arrays
//console.log (testScores[0])

//Array syntax lab
var baseballTeams = ['Dodgers', 'Giants', 'Mets', 'Yankees', 'Astros'];
//console.log (baseballTeams[1])
baseballTeams[5] = 'Rays';
baseballTeams[1] = 'Padres';
var myFavoriteTeam = baseballTeams[0];
//console.log (myFavoriteTeam)
//console.log (baseballTeams)
var californiaBaseball = baseballTeams[1];
//console.log (californiaBaseball)

//Arrays methods lab
var shoppingList = ['apples', 'pizza', 'chicken', 'mushrooms', 'oranges', 'beef'];
//console.log (shoppingList)
shoppingList.unshift('crackers');
shoppingList.push('grapes');
//console.log (shoppingList)
console.log (shoppingList.length)
shoppingList.push('siracha', 'popcorn');
shoppingList.unshift('lemonade', 'orange juice');
console.log (shoppingList)
//remove items from array
var lastItemPhil = shoppingList.pop();
var firstItemSarah = shoppingList.shift();
console.log (shoppingList)
console.log (firstItemSarah)
console.log (lastItemPhil)


