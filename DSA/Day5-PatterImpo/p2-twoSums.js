var twoSum = function (nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (map.has(diff)) {
            return ([map.get(diff), i])
        }
        map.set(nums[i], i);
    }
};

console.log(twoSum([1,2,5,7,6,3], 13))