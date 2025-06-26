var reverse = function (x) {
    let copyX = x;
    let reverse = 0;
    x = Math.abs(x);
    while (x > 0) {
        let rem = x % 10;
        reverse = (reverse * 10) + rem;
        x = Math.floor(x / 10)
    }
    let limit = Math.pow(2, 31);
    return ((reverse < limit && reverse > -limit) ? (copyX < 0) ? -reverse : reverse : 0)
};

const result = reverse(12345)
console.log(result)