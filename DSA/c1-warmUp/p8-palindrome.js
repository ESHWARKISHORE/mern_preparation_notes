var isPalindrome = function (x) {
    if (x < 0) return false;
    let originalNumber = x;
    let reverse = 0;
    while (x > 0) {
        let rem = x % 10;
        reverse = (reverse * 10) + rem;
        x = Math.floor(x / 10);
    }
    return (originalNumber === reverse ? true : false)
};

const result = isPalindrome(-121)
console.log(result)