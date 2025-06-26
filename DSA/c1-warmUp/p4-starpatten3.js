function starPattern(n) {
    for (let i = 1; i <= n; i++) {
        let row = ""
        for (let j = 1; j <= n - i; j++) {
            row = row + " ";
        }
        for (let k = 1; k <= i; k++) {
            row = row + "*";
        }
        console.log(row)
    }
}
starPattern(5)