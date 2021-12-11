// var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var names = ['John', 'Mary', 'Peter', 'Sally', 'Jane', 'Ade', 'Jame'];
// for loop
// function method

// for (var number in numbers) {
//   console.log(number);
//   // what we happen each iteration
// }

// for (var index in names) {
//   console.log(names[index]);
// }

//create the function
//call the function

function greetMe(name, age) {
  //statements
  //   console.log('Hello World', 'line 20');
  console.log('Good Day', name, 'You are', age);
}

// console.log('line 23');
// greetMe --> callback function
// greetsMe('John', 30); --> call the function
function nameArray(name, key) {
  console.log(key);
  console.log(name + ',', 'You are sighted');
}
// function mapArray(name) {
//   console.log(name + ',', 'You are sighted');
// }
//forEach method
//map method
names.forEach(nameArray); // -->nameArray(item,index,arr)
// names.map(nameArray);
//callback function

// function(function())

// Object
// repl
