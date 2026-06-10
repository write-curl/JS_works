//StackSkills kelvin to fahrenheit mini app
//kelvin temp example, stored in variable 'kelvin' 
var kelvinTemp = 301;
//variable 'celsius', kelvin temp converted to celsius (subtract 273.15 from temp)
var celsiusTemp = kelvinTemp - 273.15;
//variable 'fahrenheit', celsius temp converted to fahrenheit, celsius*(9/5)+32
var fahrenheitTemp = celsiusTemp * (9/5) + 32;
//.floor() method to round down variable fahrenheit
fahrenheitTemp = Math.floor(fahrenheitTemp);

console.log('The Temperature is ' + fahrenheitTemp + ' degrees outside.');

