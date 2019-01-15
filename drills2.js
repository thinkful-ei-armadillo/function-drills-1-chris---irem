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

function crackTheCode(string){
  const stringArr = string.split(' ');
  let decodedString = '';
  for (let i = 0; i < stringArr.length; i++){
    let currentWord = stringArr[i];
    let decoded = '';
    switch (currentWord[0]){
    case 'a': 
      decoded = currentWord[1];
      break;
    case 'b': 
      decoded = currentWord[2];
      break;
    case 'c':
      decoded = currentWord[3];
      break;
    case 'd':
      decoded = currentWord[4];
      break;
    default :
      decoded = ' ';
      break;      
    }
    decodedString += decoded;   
  }
  return decodedString; 
}
crackTheCode('craft block argon meter bells brown croon droop');

function howManyDays(month, leapYear){
  switch (month){
  case 'January':
  case 'March':
  case 'May':
  case 'July':
  case 'August':
  case 'October':
  case 'December':
    console.log(`${month} has 31 days.`);
    break;
  case 'April':
  case 'June':
  case 'September':
  case 'November':
    console.log(`${month} has 30 days.`);
    break;
  case 'February':
    if(leapYear === true){
      console.log (`${month} has 29 days.`);
    }
    else{
      console.log(`${month} has 28 days.`); 
    }
    break; 
  default:
    throw new Error('Must provide a valid month.');
  }
}
howManyDays('February', true);

function rockPaperScissors(num){
  const compAnswer = Math.floor(Math.random() * 3) + 1;
  if (compAnswer === num){
    return 'It\'s a tie.';
  }
  else if ((compAnswer === 1 && num === 2) || (num === 1 && compAnswer === 2)){
    return 'Paper beats rock. ';
  }
  else if ((compAnswer === 2 && num === 3) || (num === 2 && compAnswer === 3)){
    return 'Scissors beat paper';  
  }
  else if ((compAnswer === 3 && num === 1) || (num === 3 && compAnswer === 1)){
    return 'Rock beats Scissors.';
  }
  else{
    if (num !== 1 && num !== 2 && num !== 3){
      throw new Error('Please enter a valid number.');
    }
  }
}

console.log(rockPaperScissors(5)); 