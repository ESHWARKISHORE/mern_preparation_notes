var moveZeroes = function (nums) {
    let numberPointer = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[numberPointer] = nums[i]
            numberPointer++;
        }
    }
    nums.fill(0, numberPointer)
    console.log(nums)
};

moveZeroes([0,1,0,3,12])