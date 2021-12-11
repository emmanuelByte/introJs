var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers.length)
var numbers = [];
for (var initial = 0; initial <= 10; initial = initial + 1) {
  numbers.push(initial);
}
// console.log(numbers);
numbers.pop();
numbers.shift();
var name = 'Emmanuel';
numbers.push(name);
var hour = new Date().getHours();
numbers.splice(4, 1, hour);
console.log(numbers);
