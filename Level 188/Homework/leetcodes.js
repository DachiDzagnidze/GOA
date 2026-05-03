
// 1
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

    let k = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};


// 2
var climbStairs = function(n) {
    if (n <= 2) return n;

    let a = 1, b = 2;

    for (let i = 3; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }

    return b;
    
};

// 3
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
    
};


// 4
var moveZeroes = function(nums) {
     let k = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[k] = nums[i];
            k++;
        }
    }

    while (k < nums.length) {
        nums[k] = 0;
        k++;
    }
    
};


// 5
var intersect = function(nums1, nums2) {
    let map = {};
    let result = [];

    for (let num of nums1) {
        map[num] = (map[num] || 0) + 1;
    }

    for (let num of nums2) {
        if (map[num] > 0) {
            result.push(num);
            map[num]--;
        }
    }

    return result;
    
};