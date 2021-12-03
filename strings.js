var name = 'Peter';
console.log(name, 'Before');
name = 'Ceter';
console.log(name, 'After');
//to Petre
// mutable
// strings are immutable
// length of the string
// console.log(name.length);
// console.log(name, 'Before');
name[0] = 'C';
// console.log(name, 'After');
var theSameChar = name.slice(0, 3);
// console.log(theSameChar);
var newName = theSameChar + 're';
console.log(name, newName);
// void
