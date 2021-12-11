//create a function
function getRandomNumber(maxNumber) {
  // random number generator between 0 and 6
  console.log(maxNumber);
  var randomNumber = Math.random();
  var diceRandom = randomNumber * maxNumber;
  // 0.111111 *6 = 1.111111
  //   console.log(diceRandom);
  // var dice = Math.round(diceRandom);
  var diceFloor = Math.floor(diceRandom) + 1;
  // round to the nearest integer
  console.log(diceFloor);
}
//call the function
getRandomNumber(10);
//undefined is the default value for maxNumber
// NaN is not a number

//Random color generator
