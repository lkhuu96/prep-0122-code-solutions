function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var convertedHours = convertHoursToMinutes(2);
console.log('covertHoursToMinutes exercise:', convertedHours, 'minutes');

function getGreeting(name) {
  return 'Hello ' + name;
}

var greeting = getGreeting('Luc-Ky');
console.log('getGreeting exercise:', greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var addAndMultiply = addAndMultiplyBy5(10, 5);
console.log('addAndMultiplyBy5 exercise:', addAndMultiply);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var multiplyAndDivide = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideBy5 exercise:', multiplyAndDivide);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtracted = subtractTwoNumbers(22, 7);
console.log('subractTwoNumbers exercise:', subtracted);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var circumference = getCircleCircumference(5);
console.log('getCircleCircumference exercise:', circumference);

function getFullName(firstName, lastName) {
  return (firstName + ' ' + lastName);
}

var fullName = getFullName('Juan', 'Ramirez');
console.log('getFullName exercise:', fullName);

function cube(number) {
  return number ** 3;
}

var cubed = cube(5);
console.log('cube exercise:', cubed);
