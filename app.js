// convert to celsius
const { toCelsius } = require('celsius');

console.log(toCelsius(100));
console.log(toCelsius(100, 3));
console.log(toCelsius('105.981 F°', 5));

// convert to fahrenheit
const { toFahrenheit } = require('celsius');
 
console.log(toFahrenheit(36));
console.log(toFahrenheit(36.68, 3));
console.log(toFahrenheit('-40.691 C°', 5));