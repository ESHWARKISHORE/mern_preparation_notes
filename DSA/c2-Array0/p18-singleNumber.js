var singleNumber = function (nums) {
    // let integerFreq = new Map(); ----> Have the map for the frequency 
    // for(let i=0 ;i<nums.length;i++){
    //     if(integerFreq.has(nums[i])){
    //         integerFreq.set(nums[i], integerFreq.get(nums[i])+1). ----> if existed will add 1 to the map
    //     }
    //     else{
    //         integerFreq.set(nums[i], 1). ---- if ist occur one then we will add like 1
    //     }
    // }
    // for(let [key, value] of integerFreq){
    //     if(value === 1){.   ----> Checking that the occurrence is 1 
    //         return key;
    //     }
    // }
    let xor = 0;  ///xor is the value in js 
    for (let i = 0; i < nums.length; i++) {
        xor = xor ^ nums[i];    ///-----> will only have the duplicate
    }
    return xor
};

console.log(singleNumber([2,2,1]))