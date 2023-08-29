"use strict";
function isPalindrome(str) {
    var _a, _b;
    const word = (_a = str.toLowerCase()) === null || _a === void 0 ? void 0 : _a.split("");
    const reverseWord = (_b = word === null || word === void 0 ? void 0 : word.reverse()) === null || _b === void 0 ? void 0 : _b.join("");
    console.log(str, reverseWord);
    if ((str === null || str === void 0 ? void 0 : str.toLowerCase()) === reverseWord) {
        return true;
    }
    return false;
}
const answer = isPalindrome("saias2");
console.log(answer);
