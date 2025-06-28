var merge = function (nums1, m, nums2, n) {
    let copyNums1 = nums1.slice(0, m);
    let p1 = 0;
    let p2 = 0;
    for (let i = 0; i < m + n; i++) {
        if (p2 >= n || (p1 < m && copyNums1[p1] < nums2[p2])) {
            nums1[i] = copyNums1[p1];
            p1++;
        }
        else {
            nums1[i] = nums2[p2];
            p2++;
        }
    }
    return nums1;
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))