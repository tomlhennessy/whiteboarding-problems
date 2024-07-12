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


function logBetweenStepper(min, max, step) {
    // step 1: check if min is greater than max
    if (min > max) {
        return [];
    }

    // step 2: create an empty array
    let result = [];

    // step 3: use a for loop to iterate from min to max with the given step interval
    for (let i = min; i <= max; i += step) {
        result.push(i);
    }

    // step 4: return the resulting array
    return result;
}

// examples:
console.log(logBetweenStepper(5, 9, 1)); // => [5, 6, 7, 8, 9]
console.log(logBetweenStepper(-10, 15, 5)); // => [-10, -5, 0, 5, 10, 15]

// time complexity: O(n) - we have to iterate through each step in the range
// space complexity: O(n) - we are storing the numbers in a new array


function printReverse(min, max) {
    // step 1: create an empty array
    let result = [];

    // step 2: use a loop to iterate from max - 1 down to min (exclusive)
    for (let i = max - 1; i > min; i--) {
        result.push(i);
    }

    // step 3: return the resulting array
    return result;
}

// examples
console.log(printReverse(13, 18)); // => [17, 16, 15, 14]
console.log(printReverse(90, 94)); // => [93, 92, 91]


function fizzBuzz(max) {
    // step 1: create an empty array
    let result = [];

    // step 2: use a loop to iterate from 0 to max inclusive
    for (let i = 0; i <= max; i++) {
        // step 3: check if number is divisible by 3 or 5 but not both
        if ((i % 3 === 0 && i % 5 !== 0) || (i % 3 !== 0 && i % 5 === 0)) {
            result.push(i);
        }
    }

    // step 4: return the resulting array
    return result;
}

// time complexity: O(n) - we have to iterate through each number
// space complexity: O(n) - we are storing the numbers in an array


function isPrime(number) {
    // step 1: handle edge cases
    if (number < 2) {
        return false;
    }

    // step 2: check for factors
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    // step 3: if no divisors are found, return true
    return true;
}
