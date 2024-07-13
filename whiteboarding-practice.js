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

// #11
function intersect(arr1, arr2) {
    // step 1: create an empty array
    let result = [];

    // step 2: use a set to store the elements of the first array for quick lookup
    let set1 = new Set(arr1);

    // step 3: iterate through the second array
    for (let element of arr2) {
        // check if it exists in the set
        if (set1.has(element)) {
            // if it exists, add it to the result array
            result.push(element);
        }
    }

    // step 4: return the resulting array
    return result;
}
// time complexity: O(n+m) - creating the set from `arr1` takes O(n) time, and checking each element of `arr2` against the set takes O(m) time
// space complexity: O(n) - we're storing the elements of `arr1` in a set

// #12
function mirrorArray(array) {
    // step 1: create new array that is a copy of input array
    let mirrored = array.slice();

    // step 2: reverse the input array
    let reversed = array.slice().reverse();

    // step 3: concatenate the reversed array to the original array
    mirrored = mirrored.concat(reversed);

    // step 4: return the concatenated array
    return mirrored;
}

// improved solution
function streamlinedMirrorArray(array) {
    // step 1: create an empty array to store the result
    let result = [];

    // step 2: add the elements of original array to result array
    for (let i = 0; i < array.length; i++) {
        result.push(array[i]);
    }

    // step 3: add the elements in reverse order
    for (let i = array.length - 1; i >= 0; i--) {
        result.push(array[i]);
    }

    // step 4: return resulting array
    return result;
}


// #13
function abbreviate(sentence) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    // step 1: split sentence into new array of words
    let words = sentence.split(' ');

    // step 2: iterate through each word in the array
    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        // check if word is longer than 4 chars
        if (word.length > 4) {
            // remove the vowels from the word
            let abbreviateWord = '';
            for (let char of word) {
                if (!vowels.includes(char)) {
                    abbreviatedWord += char;
                }
            }
            // replace the word in array with abbreviated word
            words[i] = abbreviatedWord;
        }
    }

    // step 3: join the array words back into a sentence
    let abbreviatedSentence = words.join(' ');

    // step 4: return resulting sentence
    return abbreviatedSentence;
}
// time complexity: O(n) - need to iterate through each character in the sentence
// space complexity: O(n) - creating a new string for each word and storing the resulting sentence

// #14
function adults(people) {
    // step 1: create empty array to store names of adults
    let adultNames = [];

    // step 2: iterate through the array of person objects
    for (let person of people) {
        // check if person's age is 18 or higher
        if (person.age >= 18) {
            // add the person's name to the result array
            adultNames.push(person.name);
        }
    }

    // step 3: return resulting array of names
    return adultNames;
}
// example
const ppl = [
    {name: 'John', age: 20},
    {name: 'Jim', age: 13},
    {name: 'Jane', age: 18},
    {name: 'Bob', age: 7}
];

console.log(adults(ppl)); // => [ 'John', 'Jane' ]

// time complexity: O(n) - need to iterate through each person to check their age and potentially add to array
// space complexity: O(n) - in the worst case, all people in the array are adults


// #15
function countScores(people) {
    // steps 1: create an empty object to store the cumulative scores
    let scoreCounts = {};

    // step 2: iterate through the array of score objects
    for (let person of people) {
        let name = person.name;
        let score = person.score;

        // check if the name already exists in the result object
        if (scoreCounts[name] !== undefined) {
            // add the current score to the existing score
            scoreCounts[name] += score;
        } else {
            // add the name as a key and set the value to the current score
            scoreCounts[name] = score;
        }
    }

    // step 3: return the result object
    return scoreCounts;
}

// time complexity: O(n) - need to iterate through each object once to accumulate scores
// space complexity: O(k) - k is the number of unique names in the input array


// #16
function firstNPrimes(n) {
    // step 1: create an empty array to store the prime numbers
    let primes = [];

    // step 2: initialise a variable to keep track of current number
    let currentNum = 2;

    // step 3: find prime numbers until array contains n primes
    while (primes.length < n) {
        if (isPrime(currentNum)) {
            primes.push(currentNum);
        }
        currentNum++;
    }

    // step 4: return array of primes
    return primes;
}
// time complexity:
// space complexity: O(n) - storing the first 'n' prime numbers in an array


// #17
function peakFinder(array) {
    // step 1: create an empty array store the indices of the peaks
    let peaks = [];

    // step 2: iterate through the array to check for peaks
    for (let i = 0; i < array.length; i++) {
        if (i === 0) {
            // check if first element is peak
            if (array[i] > array[i + 1]) {
                peaks.push(i);
            }
        } else if (i === array.length - 1) {
            // check if last element is peak
            if (array[i] > array[i - 1]) {
                peaks.push(i);
            }
        } else {
            if (array[i] > array[i - 1] && array[i] > array[i + 1]) {
                peaks.push(i);
            }
        }
    }

    // step 3: return result array containing indices of all peaks
    return peaks;
}
// time complexity: O(n) - we iterate through each element of the array once
// space complexity: O(k) - k is the number of peaks


// #18
function divisibleByThreePairSum(array) {
    // step 1: create an empty array to store the pairs of indices
    let pairs = [];

    // step 2: use a nested loop to iterate through each possible pair of indices in the array
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++)
            // step 3: check if sum of elements is divisible by three
            if ((array[i] + array[j] % 3 === 0)) {
                // add to result array
                pairs.push([i, j]);
            }
    }

    // step 4: return the result array containing the pairs of indices
    return pairs;
}
// time complexity: O(n^2) - because we use a nested loop to check each pair of indices
// space complexity: O(k) - because we store the pairs of indices in the result array


// #19
function zipArray(arr1, arr2) {
    // step 1: create an empty array to store the zipped pairs
    let zipped = [];

    // step 2: use a loop to iterate through the indices of the arrays
    for (let i = 0; i < arr1.length; i++) {
        // create a pair consisting of the elements from arr1 and arr2 at the current index
        let pair = [arr1[i], arr2[i]];

        // add the pair to the result array
        zipped.push(pair);
    }

    // step 3: return the result array
    return zipped;
}
// time complexity: O(n) - we iterate through each element of the arrays once
// space complexity: O(n) - we store the resulting 2D array containing pairs of elements


// #20
function twoDimensionalTotal(array) {
    // step 1: initialise a variable to store the total sum and set it to 0
    let total = 0;

    // step 2: iterate through each sub-array in the 2D array
    for (let subArray of array) {
        // iterate through each element in sub-array
        for (let num of subArray) {
            // add the element to the total sum
            total += num;
        }
    }

    // step 3: return the total sum
    return total;
}
// time complexity: O(n) - need to iterate through each element once to calculate the total sum
// space complexity: O(1) - we are only using a constant amount of extra space for the `total` variable
