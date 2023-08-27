function isAnagram(str1: String, str2: String): boolean {
  if (str1 === str2) {
    return false;
  } else {
    let checkDuplicate: (String | null)[] | String = [];
    console.log(str1);
    let updateStr1:(String)[] = str1?.toLowerCase().split("")
    let updateStr2:String[] = str2?.toLowerCase().split("")
    for (let i = 0; i <= updateStr1.length; i++) {
        const char = updateStr1[i];
        console.log(char)
        const str2Index = updateStr2.indexOf(char);
        
        if (str2Index !== -1) { // If character is found in str2
          checkDuplicate.push(char);
          console.log(checkDuplicate)
          // Remove matched character from updateStr1 and updateStr2
          updateStr1.splice(i, 1);
          updateStr2.splice(str2Index, 1);
  
          // Decrement i to account for the removed character
          i--;
  
          console.log("str1", updateStr1);
          console.log("str2", updateStr2);
      } else {
        break;
      }
    }

    checkDuplicate = checkDuplicate.join("");
    console.log(checkDuplicate);
    if (
      checkDuplicate?.length === str1?.length &&
      checkDuplicate?.length === str2?.length
    ) {
      return true;
    }
    return false;
  }
}
const result = isAnagram("he2loi", "ihelo2");
console.log(result);
