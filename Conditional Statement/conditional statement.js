alert('Welcome to our club xyz ');
var age = prompt('How old are you?');
age = parseFloat(age);
// console.log(age==='18')
/*
1. gt >
2. lt <
3. gte >=
4. lte <=
5. eq == or ===
6. not eq != or !==
where a condiantional operation is passed
*/

// if (age>=60){
//     console.log('Sorry Sir! you are not meant to take alcoho, You will like this bottle water.')
// }
// else{
//     if (age>=18){
//         console.log('You are old enough to take alcoho')
//     }else  {
//         console.log('You are a small girl')
//     }
// }
if (age < 60 && age >= 18) {
  console.log('You are old enough to take alcoho');
} else if (age >= 60) {
  console.log(
    'Sorry Sir! you are not meant to take alcoho, You will like this bottle water.'
  );
} else {
  console.log('You are still a child chap!');
}
