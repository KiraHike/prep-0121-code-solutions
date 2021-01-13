function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var addTwoNumbersResult = addTwoNumbers(2, 2);
console.log('addTwoNumbers Exercise:', addTwoNumbersResult);

function convertHoursToMinutes(number) {
  return number * 60;
}

var convertHoursToMinutesResult = convertHoursToMinutes(2);
console.log('convertHoursToMinutes Exercise:', convertHoursToMinutesResult);

function personalizeGreeting(name) {
  return 'Hello ' + name;
}

var personalizeGreetingResult = personalizeGreeting('World!');
console.log('personalizeGreeting Exercise:', personalizeGreetingResult);

function returnDatatype(data) {
  return typeof data;
}

var returnDatatypeResult = returnDatatype(1072);
console.log('returnDatatype Exercise:', returnDatatypeResult);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var addAndMultiplyBy5Result = addAndMultiplyBy5(10, 5);
console.log('addAndMuliplyBy5 Exercise:', addAndMultiplyBy5Result);

function multiplyAndDivideBy5(num1, num2) {
  return num1 * num2 / 5;
}

var multiplyAndDivideBy5Result = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideBy5 Exercise:', multiplyAndDivideBy5Result);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtractTwoNumbersResult = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbers Exercise:', subtractTwoNumbersResult);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var getCircleCircumferenceResult = getCircleCircumference(5);
console.log('getCircleCircumference Exercise:', getCircleCircumferenceResult);

function returnFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var returnFullNameResult = returnFullName('Kira', 'Hike');
console.log('returnFullName Exercise:', returnFullNameResult);

function cubeNumber(number) {
  return number * number * number;
}

var cubeNumberResult = cubeNumber(5);
console.log('cubeNumber Exercise:', cubeNumberResult);

function returnMathSentence(num1, num2) {
  var total = num1 + num2;
  return 'If you add ' + num1 + ' and ' + num2 + ' together you get ' + total + '.';
}

var returnMathSentenceResult = returnMathSentence(5, 12);
console.log('returnMathSentence Exercise:', returnMathSentenceResult);
