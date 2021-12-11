// var obj = {};
// var name = 'John';
// var age = 25;
// var gender = 'Male';
// [name,age,gender,height]
// var StudentData = ['John', 25, 'Male', 30];
var studentData = {
  height: 30,
  gender: 'Male',
  age: 25,
  name: 'John',
};
// console.log(studentData);
studentData.name = 'Emmanuel';
// var ,const or let
//1. getting data in an object
// console.log(studentData);
// mutability
// 2. get data with []

// console.log(studentData['height']);
var obj = {
  name: this.name, //undefined
  isMale: this.isMale, //undefined
  logs: this.logs, //undefined
  getData: this.getData, //undefined
};
obj.name = 'Emmanuel';
obj.isMale = true;
obj.logs = [1890, 2000, 2010, 1910];
obj.getData = function () {
  return this.name;
}.bind(obj);

console.log(obj.getData());
