// var userTemperature = prompt('Enter the temperature in Celcius');
// // convert to number
// userTemperature = parseFloat(userTemperature);
// var kelvinTemperature = userTemperature + 273.15;
// alert('The temperature in Kelvin is ' + kelvinTemperature);
// k = c + 273.15;
// faheresheit = c * 1.8 + 32;
var fTemparature = prompt('Enter the temperature in Fahrenheit');
// convert to number
fTemparature = parseFloat(fTemparature);
var cTemparature = fTemparature - (32 * 5) / 9;

// converting to kelvin
var kTemparature = cTemparature + 273.15;
alert('The temperature in Kelvin is ' + kTemparature.toFixed(4));
