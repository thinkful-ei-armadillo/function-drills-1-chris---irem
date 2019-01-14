'use strict';
function createGreeting(name, age){ 
  const yearOfBirth = 2016 - age; 
  return 'Hi, my name is Chris and I\'m 35 years old.' `I was born in ${yearOfBirth}.`;
}
const greeting1 = createGreeting();
console.log(greeting1); 
