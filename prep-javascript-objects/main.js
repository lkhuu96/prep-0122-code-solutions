const person = {
  firstName: 'Luc-Ky',
  lastName: 'Khuu',
  hobby: 'Coding'
};

const fullName = person.firstName + ' ' + person.lastName;

console.log(person);
console.log("The person's name is: " + fullName);

person.job = 'Student';
console.log("The person's current job is: " + person.job);

person.previousJob = 'Lab Tech';
console.log("The person's previous job is: " + person.previousJob);

console.log('The complete person object: ', person);
