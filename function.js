console.log(dice(), 'For Normal function');
console.log(diceArrow(), 'For Arrow function');
// Hoisting
// function getRandomNumber(maxNumber) {
//   // random number generator between 0 and 6
//   console.log(maxNumber);
//   var randomNumber = Math.random();
//   var diceRandom = randomNumber * maxNumber;
//   // 0.111111 *6 = 1.111111
//   //   console.log(diceRandom);
//   // var dice = Math.round(diceRandom);
//   var diceFloor = Math.floor(diceRandom) + 1;
//   // round to the nearest integer
//   console.log(diceFloor);
// }
// var Rand = getRandomNumber;

// Rand(6); === getRandomNumber(6);
// create a function to a variable
var diceRand = function getRand(maxNumber) {
  var randomNumber = this.Math.random();
  var diceRandom = randomNumber * maxNumber;
  var dice = Math.round(diceRandom);
  return dice;
};
diceRand(6);
// diceRand= anonymous function
// diceRand(6);
// scoping a function
// Scope
// Global scope
function globalFunction() {
  var a = 'I am a global variable';
  var b = 'I am a global variable';
  var c = 'I am a global variable';
  //this means the property inside the function
  console.log(this);
  //   local scope
  function localFunction() {
    function localFunction2() {
      var a = 1;
      //   console.log(a, 'local2');
    }
    localFunction2();
  }
  localFunction();
  //   localFunction2();
  //   console.log(a, 'global');
}
// globalFunction();
// closure;
// globalFunction();

// self destructive function
(function closure() {
  var a = 'I am a global variable';
  //   local scope
  function localFunction() {
    function localFunction2() {
      var a = 1;
      //   console.log(a, 'local2');
    }
    localFunction2();
  }
  localFunction();
  //   console.log(a, 'global');
})();

function dice() {
  var randomNumber = this.Math.random();
  var diceRandom = randomNumber * 6;
  var dice = Math.round(diceRandom);
  return dice;
}
// arrow function === anonymous function
var diceArrow = () => {
  var randomNumber = Math.random(); //this.Math.random(); // this.Math cannot work in arrow function
  var diceRandom = randomNumber * 6;
  var dice = Math.round(diceRandom);
  return dice;
};
// what is this?

//hoisting
