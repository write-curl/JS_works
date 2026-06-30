// variable of weather to pass through to array
var weather = [72, 84, 34, 56, 92, 24, 47, 85, 72, 54];
var goOutside = [];

// For loop
for (var i = 0; i < weather.length; i++) {
    if (weather[i] > 70) {
        goOutside.push(weather[i]);
    }
}
// console.log (goOutside);

//  filter method, less code
var niceWeather = function(temp) {
    return temp > 70;
}
var goOutside = weather.filter(niceWeather);
// console.log (goOutside);

// filter method 2, even less code, passing function as an argument
var goOutside = weather.filter(function(temp) {
    return temp > 70;
})
// console.log (goOutside);

// create an array with objects
var forecast = [
    {day: 'Monday', sun:true},
    {day: 'Tuesday', sun:false},
    {day: 'Wednesday', sun:false},
    {day: 'Thursday', sun:true},
    {day: 'Friday', sun:false},
    {day: 'Saturday', sun:true},
    {day: 'Sunday', sun:false}
];
var sunnyDays = [];
// for loop
for (var i = 0; i < forecast.length; i++) {
    if (forecast[i].sun) {
        sunnyDays.push(forecast[i]);
    }
}
// console.log (sunnyDays);

// filter method, less code less bugs 
var sunnyDays = forecast.filter(function(weather) {
    return weather.sun;
})
// console.log (sunnyDays);

// higher order function map()
var numbers = [5, 10, 15, 20, 25];
// double the array and add one using method chaining
var double = numbers.map(function(num) {
    return num * 2;
})  .map(function(num) {
    return num + 1;
})
// console.log (double);

// create an array for greeting
var greeting = ['hi', 'hello', 'hey', 'thanks'];
// console.log (greeting);
// transform elements into new array shout and turn each element to uppercase
var shout = greeting.map(function(greet) {
    return greet.toUpperCase();
});
// console.log (shout);
var lowerCase = shout.map(function(greet) {
    return greet.toLowerCase();
})
// console.log (lowerCase);

// get rid of the first element and save it to new array shoutHi
// var shoutHi = [shout[0]];
var shoutHi = shout.shift();
// console.log (shoutHi);

// array.reduce()
