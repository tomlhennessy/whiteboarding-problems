function logBetween(lowNum, highNum) {
    // step 1: check if lowNum is greater than highNum
    if (lowNum > highNum) {
        return [];
    }

    // step 2: create an empty array
    let result = [];

    // step 3: use a loop to iterate from lowNum to highNum inclusive
    for (let i = lowNum; i <= highNum; i++) {
        result.push(i);
    }

    // step 4: return the resulting array
    return result;
}

// examples
console.log(logBetween(-1, -2)); // => [-1, 0, 1, 2]
console.log(logBetween(14, 6)); // => []
console.log(logBetween(4, 6)); // => [4, 5, 6]

// time complexity: O(n) - we have to iterate through each number
// space complexity: O(n) - because we are storing the numbers in an array
