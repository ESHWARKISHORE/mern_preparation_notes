var missingNumber = function (nums) {
    let sum = 0 ///Sum for the number 0 to the length
    let givenSum = 0. /// sum for the given array
    for (let i = 1; i < nums.length + 1; i++) {
        sum = sum + i;  
        givenSum = givenSum + nums[i - 1]
    }
    return (sum - givenSum);   /// the given number will be total sum - the array sum
};

console.log(missingNumber([1,0,3]));