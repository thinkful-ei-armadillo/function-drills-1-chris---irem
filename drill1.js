'use strict';
function getYearOfBirth(age){
  const yearOfBirth = 2016 - age;
  return yearOfBirth;  
}
function createGreeting(name, age){ 
  const yearOfBirth = getYearOfBirth(age);  
  return 'Hi, my name is Chris and I\'m 35 years old.' `I was born in ${yearOfBirth}.`;
}

const greeting1 = createGreeting('Chris', 35);
console.log(greeting1); 
