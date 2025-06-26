function starPattern(n) {
    let count = 1;
    for (let i = 1; i <= n; i++) {
        let row = ''
        for (let j = 1; j <= i; j++) {
            if (count % 2 == 0) {
                row = row + '0'
                count++;
            }
            else {
                row = row + "1"
                count++
            }
        }
        console.log(row)
    }
}
starPattern(6)