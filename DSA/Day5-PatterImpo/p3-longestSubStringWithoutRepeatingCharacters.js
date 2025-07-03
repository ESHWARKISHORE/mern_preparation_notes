var lengthOfLongestSubstring = function (s) {
    let subArray = [];
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        let indexOfCurr = subArray.indexOf(s[i]);
        if (indexOfCurr != -1) {
            subArray.splice(0, indexOfCurr + 1);
        }
        subArray.push(s[i]);
        max = Math.max(max, subArray.length)
    }
    return max;
};

console.log(lengthOfLongestSubstring("dvdf"))