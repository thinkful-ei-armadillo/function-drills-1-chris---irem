'use strict'; 
function jediName(firstName,lastName){
  let jediFirst = firstName.slice(0,3); 
  let jediLast = lastName.slice(0,2);  
  return jediLast + jediFirst;
}
console.log(jediName('chris', 'irem'));
function beyond(num){
  if (num === Infinity){
    console.log('and beyond');  
  }
  else if (num>0){
    console.log('to infinity');
  }
  else if (num<0){
    console.log('to negative infinity');
  }
  else {
    console.log('staying home');
  }
}
console.log(beyond(Infinity));