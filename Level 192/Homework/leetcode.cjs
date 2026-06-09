/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(რიცხვები, მიზანი) {
    const ობიექტი = {};

    for (let i = 0; i < რიცხვები.length; i++) {
        const წყვილი = მიზანი - რიცხვები[i];

        if (ობიექტი[წყვილი] !== undefined) {
            return [ობიექტი[წყვილი], i];
        }

        ობიექტი[რიცხვები[i]] = i;
    }
};



/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;

    const isAlphaNum = (c) => /[a-z0-9]/i.test(c);

    while (left < right) {
        if (!isAlphaNum(s[left])) {
            left++;
        } else if (!isAlphaNum(s[right])) {
            right--;
        } else {
            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false;
            }
            left++;
            right--;
        }
    }
    return true;
};


/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const words = s.split(' ');

    if (pattern.length !== words.length) return false;

    const charToWord = new Map();
    const wordToChar = new Map();

    for (let i = 0; i < pattern.length; i++) {
        const c = pattern[i];
        const w = words[i];

        if (charToWord.has(c)) {
            if (charToWord.get(c) !== w) return false;
        } else {
            charToWord.set(c, w);
        }

        if (wordToChar.has(w)) {
            if (wordToChar.get(w) !== c) return false;
        } else {
            wordToChar.set(w, c);
        }
    }

    return true;
};


/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let minSum = Infinity;
    let result = [];

    for (let i = 0; i < list1.length; i++) {
        for (let j = 0; j < list2.length; j++) {
            if (list1[i] === list2[j]) {
                let sum = i + j;
                if (sum < minSum) {
                    minSum = sum;
                    result = [list1[i]];
                }
                else if (sum === minSum) {
                    result.push(list1[i]);
                }
            }
        }
    }

    return result;
};


var isMonotonic = function(nums) {
    let increasing = true;
    let decreasing = true;

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            increasing = false;
        }
        if (nums[i] < nums[i + 1]) {
            decreasing = false;
        }
    }

    return increasing || decreasing;
};