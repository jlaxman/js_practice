/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {

  // if(str1.split("").sort().join("")==str2.split("").sort().join("")){
  //   return true;
  // }else{
  //   return false;
  // }

 if(str1.length!=str2.length){
  return false;
 }
 str1=str1.toLowerCase();
 str2=str2.toLowerCase();
 console.log(str1);
 console.log(str2);

 var alpha=[];
 
for(let i=0; i<str1.length; i++){
   
  if(alpha.hasOwnProperty(str1[i])){
    alpha[str1[i]]++;
  }else{
    alpha[str1[i]]=1;
  }
  if(alpha.hasOwnProperty(str2[i])){
    alpha[str2[i]]--;
  }else{
    alpha[str2[i]]=-1;
  }


  
}

for(const key in alpha){
    if(alpha[key]!=0){
      return false;
    }
 }
 return true;


}

module.exports = isAnagram;
