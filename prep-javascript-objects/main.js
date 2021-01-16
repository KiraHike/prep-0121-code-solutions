var person = {
  firstName: 'Kira',
  lastName: 'Hike',
  hobby: 'Reading'
};

console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);

person.job = 'Student';
console.log("The person's current job is:", person.job);

person.previousJob = 'Assistant';
console.log("The person's previous job was:", person.previousJob);

console.log('The complete person object:', person);

var myCar = {
  make: 'Honda',
  model: 'Element',
  year: '2008'
};

console.log('Car Information:', myCar);

myCar['owner'] = fullName;

var sentence = 'My name is ' + myCar['owner'] + ' and I drive a ' +
  myCar['year'] + ' ' + myCar['make'] + ' ' + myCar['model'] + '.';

console.log(sentence);

myCar['color'] = 'orange';

console.log('My Full Car Info:', myCar);
