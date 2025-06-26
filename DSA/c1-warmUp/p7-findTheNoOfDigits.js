function findNoOFDigits(n) {
    if (n == 0) {
        console.log(1); //---> If number is 0
    }
    else {
        n = Math.abs(n);    //---> If the number is negative
        let count = 0;
        while (n > 0) {
            n = Math.floor(n / 10);
            count++;
        }
        console.log(count);
    }
}

findNoOFDigits(-18736)