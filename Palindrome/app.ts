

function isPalindrome(str:String):boolean {

  const word = str.toLowerCase()?.split("");
  const reverseWord = word?.reverse()?.join("");
  console.log(str, reverseWord)
  if(str?.toLowerCase() === reverseWord){
    return true;
  }
  return false;
}

const answer = isPalindrome("saias2");
console.log(answer)