// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// Best:
function solution(str){
    return str.split('').reverse().join('');  
  }

//Me:
function solution(str){
  let strNew='';
  for(let i=str.length; i > 0; i--){
     strNew += str[i-1];
  }
   return strNew
 }