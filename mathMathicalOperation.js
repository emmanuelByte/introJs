//How to generate random number
// Math.random();
// 0 - 1;
// 0.29323782746;
// 0.923782746;
// 0.923782746;
// 0.923782746;
// 0.00000000923782746;

// 0.999999999999999;
//Genrate random number between 0 and 1
var randomNumber = Math.random();
var numberToTen = randomNumber * 10;
// random number between 0 and 10
// console.log(randomNumber);
// console.log(Math.round(randomNumber));
// turn the random number into a whole number
var roundNumber = Math.round(numberToTen);

console.log(roundNumber);

// between 1 and 6
// 0.9999999999 ---> 0
// 0.9999*10 = 9.99999999999999
// 0.22*10 = 2.2
// 0.45*10 = 4.5
// 1*10=10;
// 0*10=0;
