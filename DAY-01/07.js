/*
7.Write a function called convertToFahrenheit 
that takes a temperature in Celsius as a parameter 
and returns the temperature in Fahrenheit. 
The formula to convert Celsius to Fahrenheit 
is (C * 9/5) + 32.
*/
/*
function convertToFahrenheit(Celsius){
    
    return ((Celsius*9/5)+32)

}
console.log(convertToFahrenheit(30))
*/

function convertToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9/5) + 32;
  return `${celsius}°C is ${fahrenheit}°F`;
}

console.log(convertToFahrenheit(30));
// Output: 30°C is 86°F

