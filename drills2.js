'use strict'; 
function jediName(firstName,lastName){
  let jediFirst = firstName.slice(0,2); 
  let jediLast = lastName.slice(0,1);  
  return jediLast + jediFirst;
}
jediName('chris', 'irem');