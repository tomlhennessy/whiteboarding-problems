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


// #21
function countInnerElement(arr) {
    // step 1: create an empty object to store the counts of each element
    let counts = {};

    // step 2: iterate through each sub-array in the 2-d array
    for (let subArray of arr) {
        // iterate through each element in the sub array
        for (let element of subArray) {
            // if the element is already a key in the object, increment its count
            if (counts[element] !== undefined) {
                counts[element]++;
            } else {
                // if the element is not already a key, add it to the object with a count of 1
                counts[element] = 1;
            }
        }
    }

    // step 3: return the object with the counts
    return counts;
}
// time  complexity: O(n) - we need to iterate through each element once to count its occurances
// space complexity: O(k) - k is the number of unique elements in the array


// #22
function twoDiff(array) {
    // step 1: create an empty array to store the pairs of indices
    let pairs = [];

    // step 2: use a nested loop to iterate through each possible pair of indices
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            // step 3: check if the absolute difference between the elements is 2
            if (Math.abs(array[i] - array[j]) === 2) {
                // if it is, add the pair of indices to the result array
                pairs.push([i, j]);
            }
        }
    }

    // step 4: return the result array containing the pairs of indices
    return pairs;
}
// time complexity: O(n^2) - we use a nested loop to check each pair of indices
// space complexity: O(k) - k is the number of pairs whose elements have a difference of 2


// #23
function arrayDiff(arr1, arr2) {
    // step 1: create a set from arr2
    const set2 = new Set(arr2);

    // step 2: create an empty array to store the result
    let result = [];

    // step 3: iterate through each element in arr1
    for (let element of arr1) {
        // if element is not in set created from arr2, add it to resulting array
        if (!set2.has(element)) {
            result.push(element);
        }
    }

    // step 4: return the result array
    return result;
}
// time complexity O(n + m) - creating the set from `arr2` takes O(m) time, and iterating through `arr1` takes O(n) time
// space complexity O(m) - m is the length of `arr2`, because we are storing the elements of `arr2` in a set


// #24
function valueCounter(obj, val) {
    // step 1: initialise a counter
    let count = 0;

    // step 2: iterate through the values of the object
    for (let key in obj) {
        if (obj[key] === val) {
            // increment the counter if the value matches
            count++;
        }
    }

    // step 3: return the counter
    return count;
}
// time complexity: O(n) - need to check each value once
// space complexity: O(1) - we are using a constant amount of extra space for the counter


// #25
function elementCount(array) {
    // step 1: create an empty object to store counts of each element
    let counts = {};

    // step 2: iterate through each element in the array
    for (let element of array) {
        // if the element already exists as a key in the object, increment the value
        if (counts[element] !== undefined) {
            counts[element]++;
        } else {
            // if the element doesn't exist, add the element as a key and set value to 1
            counts[element] = 1;
        }
    }

    // step 3: return the object with the counts
    return counts;
}
// time complexity: O(n) - need to iterate through each element once
// space complexity: O(k) - need to store a count for each unique element in the object


// #26
// Step 1: helper function
function isPrime(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
}

function nextTwoPrimes(num) {
    // step 2: initialise an empty array to store the next two primes
    let primes = [];

    // step 3: use a loop to find next two prime numbers greater than num
    let currentNum = num + 1;
    while (primes.length < 2) {
        if (isPrime(currentNum)) {
            primes.push(currentNum);
        }
        currentNum++;
    }

    // step 4: return the result array
    return primes;
}
// time complexity: O(root/n)
// space complexity: O(1)


// #27
function pairProduct(arr, num) {
    // step 1: create an empty array to store pairs of indices
    let pairs = [];
    let i = 0;

    // step 2: use a nested while loop to iterate through each possible pair of indices in the array
    while (i < arr.length - 1) {
        let j = i + 1;
        while (j < arr.length) {
            // step 3: check if product of elements is equal to num
            if (arr[i] * arr[j] === num) {
                // add the pair of indices to result array
                pairs.push([i, j]);
            }
            j++;
        }
        i++;
    }

    // step 4: return the result array containing the pairs of indices
    return pairs;
}
// time complexity: O(n^2) - we use a nested loop to check each pair of indices
// space complexity: O(k) - we store the pairs of indices in resulting array


// #28
function twoDimensionalSize(array) {
    // step 1: initialise a counter
    let totalElements = 0;

    // step 2: iterate through each sub-array in the 2D array
    for (let subArray of array) {
        // increment the counter by length of sub-array
        totalElements += subArray.length;
    }

    // step 3: return the counter as the total number of elements
    return totalElements;
}
// time complexity: O(n) - we iterate through each sub-array once
// space complecity: O(1) - we are using a constant amount of extra space for the counter

// #29
function longWordCount(string) {
    // step 1: split the string into an array of words
    let words = string.split(' ');

    // step 2: initialise counter to keep track of number of long words
    let count = 0;

    // step 3: iterate through each word in array
    for (let word of words) {
        // check if the word length is greater than 7
        if (word.length > 7) {
            // increment the counter if the word is long
            count++;
        }
    }

    // step 4: return the counter
    return count;
}
// time complexity O(n) - we iterate through each word once
// space complexity O(n) - we store the words in an array


// #30
function factorial(n) {
    // step 1: initialise variable to store result and set to 1
    let result = 1;

    // step 2: use a loop to multiply the result by each integer from 1 to n
    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    // step 3: return result array as the factorial of n
    return result;
}
// time complexity: O(n)
// space complexity: O(1)


// #31
function lcm(num1, num2) {
    // step 1: determine the starting point for the iteration
    let multiple = Math.max(num1, num2);

    // step 2: use a while loop to find the LCM
    while (true) {
        if (multiple % num1 === 0 && multiple % num2 === 0) {
            // step 3: return the first number that is a multiple of both
            return multiple;
        }
        multiple++;
    }
}
// time complexity: high in worst case
// space complexity: O(1)


// #32
function hipsterfyWord(word) {
    // step 1: define a list of vowels
    const vowels = [`a`, `e`, `i`, `o`, `u`, `A`, `E`, `I`, `O`, `U`];

    // step 2: iterate through string from end
    for (let i = word.length - 1; i >= 0; i--) {
        // check if the current character is a vowel
        if (vowels.includes(word[i])) {
            // step 3: remove the last vowel and return modified string
            return word.slice(0, i) + word.slice(i + 1);
        }
    }

    // if no vowel found, return original word
    return word;
}
// time complexity: O(n) - may need to check each character once in worst case
// space complexity: O(n) - creating a new string with one less character


// #33
function hipsterfy(sentence) {
    // step 1: split the sentence into array of words
    let words = sentence.split(` `);

    // step 2: iterate through each word and apply hipsterfyWord
    for (let i = 0; i < words.length; i++) {
        words[i] = hipsterfyWord(words[i]);
    }

    // step 3: join words back into a sentence
    let modifiedSentence = words.join(' ');

    // step 4: return modified sentence
    return modifiedSentence;
}
// time complexity O(n . m) - n is number of words and m is average length of words
// space complexity: O(n . m) - storing the words in an array and the resulting modified sentence


// #34
function objectToString(count) {
    // step 1: initialise an empty string to build result
    let result = '';

    // step 2: iterate through each key-value pair in object
    for (let char in count) {
        // append key to result string
        result += char.repeat(count[char]);
    }

    // step 3: return resulting string
    return result;
}
// time complexity: O(n) - we need to process each character and its count in the object
// space complexity: O(n) - we need to store the output string


// #35
function shortestWord(sentence) {
    // step 1: split sentence into array of words
    let words = sentence.split(' ');

    // step 2: initialise variable to keep track of shortest word
    let shortest = words[0];

    // step 3: iterate through each word in array
    for (let i = 1; i < words.length; i++) {
        if (words[i].length < shortest.length) {
            // update the shortest word if current word is shorter
            shortest = words[i];
        }

    }

    // step 4: return shortest word
    return shortest;
}
// time complexity: O(n) - need to iterate through each word once
// space complexity: O(1) - using a constant amount of extra space for `shortest` variable


// #36
function greatestCommonFactor(num1, num2) {
    // use the Euclidian algorithm to find the GCF
    while (num2 !== 0) {
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }
    return num1;
}


// #37
function isPassing(assessments) {
    // step 1: initialise a variable to store the total score
    let totalScore = 0;

    // step 2: iterate through each assessment
    for (let assessment of assessments) {
        totalScore += assessment.score;
    }

    // step 3: calculate the average score
    let averageScore = totalScore / assessments.length;

    // step 4: return true if the average score is at least 70, otherwise return false
    return averageScore >= 70;
}
// time complexity: O(n) - need to iterate through each assessment once
// space complexity: O(1) - using a constant amount of space for the total score and average score


// #38
function valueConcat(array, obj) {
    // step 1: initialise a new array to store the result
    let result = [];

    // step 2: iterate through each element in the input array
    for (let element of array) {
        if (obj[element] !== undefined) {
            // if the element exists as a key in the object, concatenate it with its value from object
            result.push(element + obj[element]);
        } else {
            // if the element does not exist as a key, keep the element unchanged
            result.push(element);
        }
    }

    // step 4: return result array
    return result;
}
// time complexity: O(n) - need to iterate through each element once
// space complexity: O(n) - storing the result in a new array


// #39
function threeInARow(arr) {
    // step 1: iterate through the array from first element to third-to-last-element
    for (let i = 0; i < arr.length - 3; i++) {
        // step 2: check if the current element and next two elements are the same
        if (arr[i] === arr[i + 1] && arr[i] === arr[i + 2]) {
            return true;
        }
    }

    // step 3: return false if no three consecutive elements are found
    return false;
}
// time complexity: O(n) - we iterate through each element once
// space complexity: O(1) - using a constant amount of extra space for the loop variable


// #40
function variableNameify(words) {
    if (words.length === 0) return '';

    // step 1: convert the first word to lowercase
    let variableName = words[0].toLowerCase();

    // step 2: iterate through remaining words
    for (let i = 1; i < words.length; i++) {
        // convert each word to lowercase and capitalise the first letter
        let word = words[i].toLowerCase();
        let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);

        // step 3: concatenate all words together
        variableName += capitalizedWord;
    }

    // step 4: return the concatenated string as the variable name
    return variableName;
}
// time complexity: O(n) - we iterate through each word and process each character
// space complexity: O(n) - we store the result in a new string


// #41
function threeIncreasing(arr) {
    // step 1: iterate through the array from the first element to the third-to-last element
    for (let i = 0; i <= arr.length - 3; i++) {
        // step 2: check if current element and next two elements are in increasing order by 1
        if (arr[i] + 1 === arr[i + 1] && arr[i + 1] + 1 === arr[i + 2]) {
            return true;
        }
    }

    // step 3: return false if no three consecutive elements are found
    return false;
}
// time complexity: O(n) - we iterate through each element once
// space complexity: O(1) - we are using a constant amount of extra space for the loop variable


// #42
function reverse2D(array) {
    // step 1: flatten the 2D array into a 1D array
    let flattened = [];
    for (let subArray of array) {
        flattened = flattened.concat(subArray);
    }

    // step 2: reverse the 1D array
    flattened.reverse();

    // step 3: join the reversed array into a single string
    let result = flattened.join('');

    // step 4: return the resulting string
    return result;
}
// time complexity: O(n) - we iterate through each element once to flatten, reverse, and join them
// space complexity: O(n) - we store the flattened version of the array and the resulting string


// #43
function reverb(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let lastVowelIndex = -1;

    // step 2: find the last vowel in the word
    for (let i = word.length - 1; i >= 0; i--) {
        if (vowels.includes(word[i])) {
            lastVowelIndex = i;
            break;
        }
    }

    // step 3: if a vowel is found, repeat the substring
    if (lastVowelIndex !== -1) {
        let substring = word.slice(lastVowelIndex);
        word = word + substring;
    }

    // step 4: return the modified word
    return word;
}
// time complexity: O(n) - need to iterate through each character once to find last vowel and again to concatenate the substring
// space complexity: O(n) - resulting string may be up to twice the length of input string in worst case

// #44
function countRepeats(string) {
    // step 1: create an object to count the occurances of each char
    let charCount = {};

    // step 2: iterate through string and populate object
    for (let char of string) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    // step 3: count the number of characters that have a count greater than 1
    let repeatCount = 0;
    for (let char in charCount) {
        if (charCount[char] > 1) {
            repeatCount++;
        }
    }

    // step 4: return the count of such characters
    return repeatCount;
}
// time complexity: O(n) - we iterate through the string once to count characters and once to count the repeats
// space complexity: O(1) - we consider the space required for the `charCount` object to be constant relatvie to input size. However, in the worst case, it is O(n), where n is the number of unique characters in the string


// #45
function pairsToString(arr) {
    // step 1: initialise an empty string to build result
    let result = '';

    // step 2: iterate through the array of pairs
    for (let pair of arr) {
        let char = pair[0];
        let count = pair[1];

        // append the char repeated `count` times to the result
        result += char.repeat(count);
    }

    // step 3: return resulting string
    return result;
}
// time complexity: O(n) - need to repeat each character and build final string
// space complexity: O(n) - we store the final string in memory


// #46
function countAdjacentSums(arr, n) {
    // step 1: initialise a counter
    let count = 0;

    // step 2: iterate through array from first element to second-to-last element
    for (let i = 0; i < arr.length - 1; i++) {
        // step 3: check each pair of adjacent elements
        if (arr[i] + arr[i + 1] === n) {
            // increment the counter if the sum equals n
            count++;
        }
    }

    // step 4: return the counter
    return count;
}
// time complexity: O(n) - we iterate through each element once
// space complexity: O(1) - using a constant amount of extra space for the `count` variable


// #47
function signFlipCount(nums) {
    // step 1: initialise a counter
    let count = 0;

    // step 2: iterate through array
    for (let i = 0; i < nums.length - 1; i++) {
        // step 3: check each pair of adjacent elements
        if (nums[i] !== 0 && nums[i + 1] !== 0 && ((nums[i] > 0 && nums[i + 1] < 0) || (nums[i] < 0 && nums[i + 1] > 0))) {
            count++;
        }
    }

    // step 4: return the counter
    return count;
}
// time complexity: O(n) - we iterate through each element once
// space complexity: O(1) - using a constant amount of extra space for the `count` variable


// #48
function powerSequence(base, length) {
    // step 1: initialise array with first element being the base
    let sequence = [base];

    // step 2: iterate from 1 to length - 1 to generate sequence
    for (let i = 1; i < length; i++) {
        // step 3: multiply last element of array by base and append result
        sequence.push(sequence[sequence.length - 1] * base);
    }

    // step 4: return array
    return sequence;
}
// time complexity: O(n) - we iterate `length - 1` times to build the sequence
// space complexity: O(n) - we store the resulting sequence in an array


// #49
function collapseString(str) {
    // step 1: initialise empty string to build result
    let result = '';

    // step 2: iterate through the string char by char
    for (let i = 0; i < str.length; i++) {
        // step 3: check if current char is same as previous char
        if (i > 0 && str[i] === str[i - 1]) {
            continue; // skip this character
        }

        // add current char to result string
        result += str[i];
    }

    // step 4: return result string
    return result;
}
// time complexity: O(n) - we iterate through each char once
// space complexity: O(n) - we store the resulting string in memory


// #50
function oddWordsOut(sentence) {
    // step 1: split sentence into array of words
    let words = sentence.split(' ');

    // step 2: filter array to include only words with even no. of chars
    let evenWords = words.filter(word => word.length % 2 === 0);

    // step 3: join filtered array back into a string
    let result = evenWords.join(' ');

    // step 4: return resulting string
    return result;
}
// time complexity: O(n) - we split the string into words, filter the words, and join them back into a string
// space complexity: O(n) - we store the words in an array and create a filtered array


// #51
function mindPsAndQs(str) {
    let currentStreak = 0;
    let longestStreak = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'P' || str[i] === 'Q') {
            currentStreak++;
        } else {
            if (currentStreak > longestStreak) {
                longestStreak = currentStreak;
            }
            currentStreak = 0;
        }
    }

    // final check in case longest streak ends at end of string
    if (currentStreak > longestStreak) {
        longestStreak = currentStreak;
    }

    return longestStreak;
}
// time complexiy: O(n)
// space complexity: O(1)


// #52
function findFactors(num) {
    const factors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}

function commonFactors(num1, num2) {
    const factors1 = findFactors(num1);
    const factors2 = findFactors(num2);

    const common = [];
    for (let factor of factors1) {
        if (factors2.includes(factor)) {
            common.push(factor);
        }
    }
    return common;
}


// #53
function splitHalfArray(array) {
    let middleIndex = Math.floor(array.length / 2);
    if (array.length % 2 !== 0) {
        middleIndex += 1;
    }
    const firstHalf = array.slice(0, middleIndex);
    const secondHald = array.slice(middleIndex);
    return [firstHalf, secondHalf];
}
// time complexity: O(n)
// space complexity: O(n)


// #54
function threeUniqueVowels(string) {
    const VOWELS = ['a', 'e', 'i', 'o', 'u'];
    const uniqueVowels = new Set();

    for (let char of string.toLowerCase()) {
        if (VOWELS.includes(char)) {
            uniqueVowels.add(char);
        }
    }

    return uniqueVowels.size >= 3;
}
// time complexity: O(n)
// space complexity: O(1) - maximum size of the set is five


// #55
function vowelShift(sentence) {
    const VOWELS = ['a', 'e', 'i', 'o', 'u'];
    const vowelMap = {
        'a': 'e',
        'e': 'i',
        'i': 'o',
        'o': 'u',
        'u': 'a'
    }

    let newSentence = '';

    for (let char of sentence) {
        if (vowelMap[char]) { // check if character is a vowel
            newSentence += vowelMap[char]; // replace with the next vowel
        } else {
            newSentence += char; // keep it unchanged
        }
    }

    return newSentence;
}
// time complexity: O(n) - iterating over each character in sentence
// space complexity: O(n) - storing the new sentence


// #56
function hasSymmetry(array) {
    let n = array.length;
    for (let i = 0; i < n / 2; i++) {
        if (array[i] !== array[n - 1 - i]) {
            return false;
        }
    }
    return true;
}
// time complexity: O(n)
// space complexity: O(1)


// #57
function sumOfEvens(num) {
    let sum = 0;
    for (let i = 2; i <= num; i += 2) {
        sum += i;
    }
    return sum;
}

function evenSumArray(array) {
    let result = [];
    for (let num of array) {
        result.push(sumOfEvens(num));
    }
    return result;
}
// time complexity: O(n^2)
// space complexity: O(n)


// #58
function numsToWords(numString) {
    const digitToWord = {
        '0': 'Zero',
        '1': 'One',
        '2': 'Two',
        '3': 'Three',
        '4': 'Four',
        '5': 'Five',
        '6': 'Six',
        '7': 'Seven',
        '8': 'Eight',
        '9': 'Nine'
    }

    let result = '';

    for (let char of numString) {
        result += digitToWord[char];
    }

    return result;
}
// time complexity: O(n)
// space complexity: O(n)


// #59
function moreDotLessDash(str) {
    let dotCount = 0;
    let dashCount = 0;

    for (let char of str) {
        if (char === '.') {
            dotCount++;
        } else if (char === '-') {
            dashCount++;
        }
    }

    return dotCount > dashCount;
}
// time complexity: O(n)
// space complexity: O(1)
