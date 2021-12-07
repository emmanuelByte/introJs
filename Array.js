// Array is a collection of data bundled togather as a single datatype
var array = [];
// get the lenght of the array
var lenght = array.lenght;
// to get last index of the array
var indexOftheLastItem = array.lenght - 1;
// call the last item
array[indexOftheLastItem];
// to get the first item
array[0];
// to get the last item
array[array.lenght - 1];
//create an array of names
var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];
// name[0] >> John 0 is the index
// name[1] >> Jane 1 is the index
// name[2] >> Mary 2 is the index
// name[3] >> Mark 3 is the index
// name[4] >> Bob 4 is the index
//remove the last item from the array
names.pop();
// >>['John', 'Jane', 'Mary', 'Mark']
//add an item to the end of the array
names.push('Steve');
// >>['John', 'Jane', 'Mary', 'Mark', 'Steve']
//remove the first item from the array
names.shift();
// >>['Jane', 'Mary', 'Mark', 'Steve']
//add an item to the start of the array
names.unshift('Stephen');
// >>['Steve', 'Jane', 'Mary', 'Mark', 'Steve', 'Stephen']
//remove an item from the array
//this part can get tricky but it is the same as the above
// array.splice(startIndex, numberOfItemsToRemove, itemToAdd);
// I lied! nothing like that above 😂.
// to sometime splice is use with two parameter (startIndex, numberOfItemsToRemove)
names.splice(2, 1);
// >>['Steve', 'Jane', 'Steve', 'Mark', 'Steve', 'Stephen']
// Most time or generally  splice is use with three parameter (startIndex, numberOfItemsToRemove, itemToAdd)

// >>['Steve', 'Jane', 'Steve', 'Stephen']
//add an item to the array
names.splice(2, 0, 'Steve');
//the above will add Steve to the array at the index 2 and remove nothing from the array
// remember splice is use with three parameter (startIndex, numberOfItemsToRemove, itemToAdd)
//to get the index of an item in the array
names.indexOf('Steve');
//to check if an item is in the array
