'use strict'; 
function jediName(firstName,lastName){
  let jediFirst = firstName.slice(0, 3); 
  let jediLast = lastName.slice(0, 2);  
  return jediLast + jediFirst;
}
console.log(jediName('chris', 'irem'));