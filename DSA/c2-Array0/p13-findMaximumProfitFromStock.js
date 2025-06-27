var maxProfit = function (prices) {
    let min = prices[0];
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i]
        }
        let currProfit = prices[i] - min;
        if (currProfit > maxProfit) {
            maxProfit = currProfit
        }
    }
    return (maxProfit);
};


const result = maxProfit([7,1,5,3,6,4])
console.log(result)