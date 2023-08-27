function isAnagram(str1, str2) {
    if (str1 === str2) {
        return false;
    }
    else {
        var checkDuplicate = [];
        console.log(str1);
        var updateStr1 = str1 === null || str1 === void 0 ? void 0 : str1.toLowerCase().split("");
        var updateStr2 = str2 === null || str2 === void 0 ? void 0 : str2.toLowerCase().split("");
        for (var i = 0; i <= updateStr1.length; i++) {
            var char = updateStr1[i];
            console.log(char);
            var str2Index = updateStr2.indexOf(char);
            if (str2Index !== -1) { // If character is found in str2
                checkDuplicate.push(char);
                console.log(checkDuplicate);
                // Remove matched character from updateStr1 and updateStr2
                updateStr1.splice(i, 1);
                updateStr2.splice(str2Index, 1);
                // Decrement i to account for the removed character
                i--;
                console.log("str1", updateStr1);
                console.log("str2", updateStr2);
            }
            else {
                break;
            }
        }
        checkDuplicate = checkDuplicate.join("");
        console.log(checkDuplicate);
        if ((checkDuplicate === null || checkDuplicate === void 0 ? void 0 : checkDuplicate.length) === (str1 === null || str1 === void 0 ? void 0 : str1.length) &&
            (checkDuplicate === null || checkDuplicate === void 0 ? void 0 : checkDuplicate.length) === (str2 === null || str2 === void 0 ? void 0 : str2.length)) {
            return true;
        }
        return false;
    }
}
var result = isAnagram("he2loi", "ihelo2");
console.log(result);
