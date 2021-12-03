/*
if the number a multiple of 3 print fizz
if the number is a multiple of 5 print buzz
if the number is a multiple of both 3 and 5 print fizzbuzz

if (number%3===0){
    if (number%5===0){
        console.log(number,'is a multiple of both 3 and 5');
    }else{
    console.log(number,'is a multiple of 3');
    }
}else{
    if (number%5===0){
        console.log(number,'is a multiple of 5');
    }
    else{
        console.log(number,'is not a multiple of 3 or 5');
    }
}

*/
var number = parseInt(prompt('Enter a Number?'));

if (number % 3 === 0 && number % 5 === 0) {
  console.log('fizzbuzz');
} else if (number % 3 === 0) {
  console.log('fiz');
} else if (number % 5 === 0) {
  console.log('buzz');
} else {
  console.log('Not a multiple of 3 and 5');
}
