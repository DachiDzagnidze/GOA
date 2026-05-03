var twoSum = function(nums, target) {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        const need = target - nums[i];

        if (map[need] !== undefined) {
            return [map[need], i];
        }

        map[nums[i]] = i;
    }
};

var removeElement = function(nums, val) {
    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};

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

var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }

        digits[i] = 0;
    }

    digits.unshift(1);
    return digits;
};

var lengthOfLastWord = function(s) {
    let len = 0;
    let i = s.length - 1;

    while (i >= 0 && s[i] === " ") {
        i--;
    }

    while (i >= 0 && s[i] !== " ") {
        len++;
        i--;
    }

    return len;
};