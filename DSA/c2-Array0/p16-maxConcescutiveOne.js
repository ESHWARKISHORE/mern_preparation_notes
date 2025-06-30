var findMaxConsecutiveOnes = function (nums) {
    let currentOccurance = 0;
    let maxOccurance = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            currentOccurance++;
        }
        else {
            currentOccurance = 0;
        }
        if (currentOccurance > maxOccurance) {
            maxOccurance = currentOccurance;
        }
    }
    return maxOccurance;
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))