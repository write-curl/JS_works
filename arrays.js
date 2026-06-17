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
//Use unshift() method to add crackers to the beginning of the list
shoppingList.unshift('crackers');
//Use push() method to add grapes to the end of the list
shoppingList.push('grapes');
//console.log (shoppingList)
//console.log (shoppingList.length)
//Use push() method to add multiple elements to the end of the list
shoppingList.push('siracha', 'popcorn');
//Use unshift() method to add multiple elements to the beginning of the list
shoppingList.unshift('lemonade', 'orange juice');
//console.log (shoppingList)
//remove items from array, save as variable, use pop() and shift()
var lastItemPhil = shoppingList.pop();
var firstItemSarah = shoppingList.shift();
console.log (shoppingList)
console.log (firstItemSarah)
console.log (lastItemPhil)

//More arrays methods, second lab
var colors = ['red', 'orange', 'yellow', 'blue', 'indigo', 'violet'];
var colors2 = ['green', 'black', 'pink', 'purple'];
//Use concat() method to join the two arrays
var allColors = colors.concat(colors2);
console.log (allColors)
var colors3 = ['brown', 'orange', 'peach'];
//Use concat() method to join three arrays
var moreAllColors = colors.concat(colors2, colors3);
console.log (moreAllColors)
//Use reverse() to sort the values in reverse order
var newColors = allColors.reverse();
console.log (newColors)
//Use the sort() method to return the values in alphabetical order
var alphaColors = allColors.sort();
console.log (alphaColors)
//Use slice() to create new variables using the values from the weather array
var weather = ['rainy', 'cold', 'chilly', 'snowy', 'cloudy', 'hot', 'warm', 'humid'];
var winter = weather.slice(0, 5);
console.log (winter)
var summer = weather.slice(5);
console.log (summer)
//Use negative numbers with slice() method
var summer = weather.slice(-3);
console.log (summer)
var winter = weather.slice(-8, -3);
console.log (winter)

