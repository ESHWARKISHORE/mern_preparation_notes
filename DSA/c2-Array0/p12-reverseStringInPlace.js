var reverseString = function (s) {
    let length = s.length;
    const loopLength = Math.floor(length / 2)
    for (let i = 0; i < loopLength; i++) {
        const temp = s[i];
        s[i] = s[length - 1 - i];
        s[length - 1 - i] = temp;
    }
   return s;
};


const result = reverseString(["h","e","l","l","o"])
console.log(result);