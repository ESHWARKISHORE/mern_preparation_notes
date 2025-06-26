var removeDuplicates = function (nums) {
    let x = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[x]) {
            x = x + 1;
            nums[x] = nums[i];
        }
    }
    return x + 1;
};

const result = removeDuplicates([1,1,1,2,2,3,4,5,6,7])
console.log(result)