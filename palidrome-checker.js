/*
Code developed by William Garcia
Website: https://www.williamgar.com
LinkedIn: https://www.linkedin.com/in/williamgar
GitHub: https://github.com/William-Gar
*/

function palindrome(str) {
  let regExp = /[A-Za-z0-9]+/g;
  str = str.match(regExp).join("").toLowerCase();
  let str2 = "";
    
  for(let i = str.length - 1; i >= 0; i--){
    str2 += str[i];
  }
  
  return (str === str2) ? true : false;
}
  
//palindrome("eye");
//palindrome("My age is 0, 0 si ega ym.");

console.log(palindrome("eye"));
console.log(palindrome("Coding"));
console.log(palindrome("My age is 0, 0 si ega ym."));
