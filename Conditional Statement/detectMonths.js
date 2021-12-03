var monthWith30Days = 'April June September November';
var monthWith31Days = 'January March May July August October December';
var monthWith28Days = 'February';

var daysInMonth = parseInt(prompt('Enter the days in the month'));

if (daysInMonth === 31) {
  console.log('The month is likely to be', monthWith31Days);
} else {
  if (daysInMonth === 30) {
    console.log('The month is likely to be', monthWith30Days);
  } else {
    if (daysInMonth === 28 || daysInMonth === 29) {
      console.log('The month is to be', monthWith28Days);
    } else {
      console.log(
        "Dear Sir or Ma'am no month with" + ' ' + daysInMonth + ' days'
      );
    }
  }
}
// refractor
