var date = new Date();
var currentYear = date.getFullYear();
var name = prompt('Enter your name');
var age = prompt('Enter your age');
var gender = prompt('Which gender are you?');
var height = prompt('Enter your height (cm)');
var weight = prompt('What do you weigh? (Kg)');
//convert to Integers
height = parseFloat(height);
weight = parseFloat(weight);
//convert age to Integer
age = parseInt(age);
var yearOfBirth = currentYear - age;
alert(
  'Hello ' +
    name +
    '! You are ' +
    age +
    ' years old. You were born in ' +
    yearOfBirth +
    '.'
);
// Body mass Index = weight/height2
var bmi = weight / Math.pow(height, 2);
//format the name
name = name[0].toUpperCase() + name.slice(1).toLowerCase();

// print the result
// alert('Hi ' + name + '! Your BMI is ' + bmi.toFixed(3));
// indexing

//Date object
