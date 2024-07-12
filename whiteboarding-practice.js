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

// time complexity: O(root/n) - we only check for factors up to the square root of the number
// space complexity: O(1) - we aren't using any additional data structures that grow with input size


function maxValue(array) {
    // step 1: check if the array is empty
    if (array.length === 0) {
        return null;
    }

    // step 2: initialise a variable to store max value
    let max = array[0];

    // step 3: iterate through the array
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }

    // step 4: return the max value
    return max;
}

// time complexity: O(n) - we iterate through each element in the array
// space complexity: O(1) - using a constant amount of extra space to store max value


function myIndexOf(array, target) {
    // step 1: iterate through array
    for (let i = 0; i < array.length; i++) {
        // compare each element with the target
        if (array[i] === target) {
            // step 2: if target is found, return current index
            return i;
        }
    }

    // step 3: if the loop completes without finding the target, return -1
    return -1;
}

// time complexity: O(n) - in worst case, we may need to check each element in array once
// space complexity; O(1) - since we are using a constant amount of extra space


function factorArray(array, num) {
    // step 1: create an empty array
    let result = [];

    // step 2: iterate through the input array
    for (let i = 0; i < array.length; i++) {
        // check if current element is a factor of num
        if (num % array[i] === 0) {
            result.push[i];
        }
    }
    // step 3: return resulting array
    return result;
}
// time complexity: O(n)
// space complexity: O(n)



function oddRange(end) {
    // step 1: create an empty array
    let result = [];

    // step 2: use a loop to iterate through numbers from 1 to end inclusive
    for (let i = 1; i <= end; i++) {
        // step 3: check if each number is odd
        if (i % 2 === 0) {
            // add to result array
            result.push(i);
        }
    }

    // step 4: return resulting array
    return result;
}
// time complexity: O(n)
// space complexity: O(n)


function reverseHyphenString(string) {
    // step 1: split the string into an array of words
    let words = string.split('-');

    // step 2: reverse the array of words
    let reversedWords = words.reverse();

    // step 3: join the words back into a string
    let reversedString = reversedWords.join('-');

    // step 4: return the resulting string
    return reversedString;
}
// time complexity: O(n) - splitting the string, reversing the array, and joining the string are all linear operations
// space complexity: O(n) - we are storing the split array of words and the reversed array in memory
