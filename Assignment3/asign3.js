//1 Transform Array
 //Input: [2, 3, 4, 5, 3, 3, 5, 2, 5, 3] Output: [4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 5, 5, 5, 5, 2, 2]
function transformArray(arr) {
    let result = [];
    let countMap = {}; 
    arr.forEach(num => {
        countMap[num] = (countMap[num] || 0) + 1;
    });
    for (let num in countMap) {
        for (let i = 0; i < countMap[num]; i++) {
            result.push(parseInt(num));
        }
    }
    return result;
}
let inputArray = [2, 3, 4, 5, 3, 3, 5, 2, 5, 3];
console.log(transformArray(inputArray));

//2 find max an min
function findMaxMin(arr) {
    let max = arr[0];
    let min = arr[0];

    arr.forEach(num => {
        if (num > max) max = num;
        if (num < min) min = num;
    });

    return { max, min };
}

let num = [3, 7, 8, 6, 2, 5];
console.log(findMaxMin(num)); 
//3 Filter and Map
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 30 },
    { name: "David", age: 16 },
    { name: "Eve", age: 20 }
];
const adults = people.filter(person => person.age >= 18).map(person => person.name);
console.log(adults); 

//4 Double Elements Using Map
function doubleArray(arr) {
    return arr.map(num => num * 2);
}

let numbers = [1, 2, 3, 4, 5];
console.log(doubleArray(numbers)); 

//5 Print Numbers with Delay
function printNumbersWithDelay() {
    for (let i = 1; i <= 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, i * 1000);
    }
}
printNumbersWithDelay();

//6 Check Palindrome
function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(isPalindrome("racecar")); 
console.log(isPalindrome("hello")); 

//7 Remove Duplicates Without Built-in Functions
function removeDuplicates(arr) {
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (uniqueArr.indexOf(arr[i]) === -1) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}
let arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(arrayWithDuplicates)); 

//8 Find Maximum Number
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

let number = [1, 2, 3, 4, 5];
console.log(findMax(number)); 

//9 Remove Duplicate Arrays
function removeDuplicateArrays(arrays) {
    let uniqueArrays = [];
    arrays.forEach(array => {
        if (!uniqueArrays.some(uniqueArray => JSON.stringify(uniqueArray) === JSON.stringify(array))) {
            uniqueArrays.push(array);
        }
    });
    return uniqueArrays;
}

let arrayOfArrays = [[1, 2], [1, 2], [3, 4], [5, 6], [3, 4]];
console.log(removeDuplicateArrays(arrayOfArrays)); 

//10 function flattenArray(arr) {
    function flattenArray(arr) {
        let flatArray = [];
        arr.forEach(element => {
            if (Array.isArray(element)) {
                flatArray = flatArray.concat(flattenArray(element));
            } else {
                flatArray.push(element);
            }
        });
        return flatArray;
    }
    
    let nestdArray = [1, [2, [3, 4], 5], 6];
    console.log(flattenArray(nestdArray)); 

    //11 Count Repeated Characters in a String
    function countRepeatedCharacters(str) {
    let charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    return Object.entries(charCount).map(([char, count]) => `${char}: ${count}`).join(', ');
}

console.log(countRepeatedCharacters("hello")); 

//12 Add Zeros After Every 3 Values in an Array
function addZeros(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i]);
        if ((i + 1) % 3 === 0) {
            result.push(0);
        }
    }
    return result;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(addZeros(arr)); 

//13 Extract Numbers Between Characters and Add Them.
function sumNumbersBetweenChars(str) {
    let sum = 0;
    let currentNumber = '';
    for (let char of str) {
        if (!isNaN(char)) {
            currentNumber += char;
        } else {
            if (currentNumber) {
                sum += parseInt(currentNumber);
                currentNumber = '';
            }
        }
    }
    if (currentNumber) {
        sum += parseInt(currentNumber);
    }
    return sum;
}

console.log(sumNumbersBetweenChars("a12b34c56")); 

// 14 Count Maximum Prefix and Suffix
function maxPrefixSuffix(str) {
    let maxCount = 0;
    for (let i = 1; i < str.length; i++) {
        if (str.slice(0, i) === str.slice(-i)) {
            maxCount = i;
        }
    }
    return maxCount;
}

console.log(maxPrefixSuffix("abcab"));

//15. Find Missing Numbers from 1 to 100
function findMissingNumbers(arr) {
    let missingNumbers = [];
    for (let i = 1; i <= 100; i++) {
        if (!arr.includes(i)) {
            missingNumbers.push(i);
        }
    }
    return missingNumbers;
}

let aray = [1, 2, 3, 5, 6, 99, 100];
console.log(findMissingNumbers(aray));

//16 Remove Middle Element.
function removeMiddleElement(arr) {
    let length = arr.length;
    if (length % 2 === 1) {
        let middleIndex = Math.floor(length / 2);
        arr.splice(middleIndex, 1);
    } else {  
        arr = [arr[0], arr[length - 1]];
    }
    return arr;
}
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 4, 5, 6];
console.log(removeMiddleElement(arr1)); 
console.log(removeMiddleElement(arr2)); 

//17. Calculate Factorial.
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5)); 
console.log(factorial(0)); 

//18.Filter Specific Strings

function filterNumericStrings(arr) {
    return arr.filter(str => /^\d+$/.test(str));
}

let inputArr = ["1a1", "2aa3a", "aabc31", "101", "1001", "a1", "3211", "11c"];
console.log(filterNumericStrings(inputArr)); 
//19. Filter Numeric Palindromes
function filterNumericPalindromes(arr) {
    return arr.filter(num => {
        let str = num.toString();
        return str === str.split('').reverse().join('');
    });
}

let inputArra = [121, 123, 454, 567, 789, 101];
console.log(filterNumericPalindromes(inputArra)); 

//20. Longest Substring Without Repeating Characters
function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let currentSubstring = '';
    
    for (let char of s) {
        if (currentSubstring.includes(char)) {
            currentSubstring = currentSubstring.slice(currentSubstring.indexOf(char) + 1);
        }
        currentSubstring += char;
        maxLength = Math.max(maxLength, currentSubstring.length);
    }
    
    return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb")); 
console.log(lengthOfLongestSubstring("bbbbb")); 
console.log(lengthOfLongestSubstring("pwwkew")); 

//21. Reverse the Array Without Using Built-in Functions
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}
let originalArray = [1, 2, 3, 4, 5];
console.log(reverseArray(originalArray)); 

//22. Count the Occurrences of Each Unique Character in the String
function countUniqueCharacters(str) {
    let charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    return charCount;
}

console.log(countUniqueCharacters("hello")); 

//23. Find the Second Maximum and Minimum Numbers in an Array
function secondMaxMin(arr) {
    let uniqueArr = [...new Set(arr)];
    uniqueArr.sort((a, b) => a - b);
    return {
        secondMax: uniqueArr[uniqueArr.length - 2],
        secondMin: uniqueArr[1]
    };
}

let array = [3, 7, 8, 6, 2, 5];
console.log(secondMaxMin(array)); 

//24.Sort an Array Without Using Built-in Methods
function sortArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

let n = [3, 7, 8, 6, 2, 5];
console.log(sortArray(n)); 

//25. Remove Duplicate Characters in a String
function removeDuplicateCharacters(str) {
    let uniqueChars = '';
    for (let char of str) {
        if (!uniqueChars.includes(char)) {
            uniqueChars += char;
        }
    }
    return uniqueChars;
}

console.log(removeDuplicateCharacters("hello")); 

//26. Convert Snake Case to Camel Case
function snakeToCamel(str) {
    return str.replace(/(_\w)/g, match => match[1].toUpperCase());
}

console.log(snakeToCamel("hello_world")); 

//27. Find the Second Largest Number in a Nested Array
function secondLargestInNestedArray(arr) {
    let flatArray = arr.flat(Infinity);
    let uniqueArr = [...new Set(flatArray)];
    uniqueArr.sort((a, b) => b - a);
    return uniqueArr[1];
}

let nestedArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(secondLargestInNestedArray(nestedArray)); 

// 28 Add Zeros After Every 3 Values in an Array
function addZeros(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i]);
        if ((i + 1) % 3 === 0) {
            result.push(0);
        }
    }
    return result;
}

let ar = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(addZeros(ar)); 

//29. Capitalize the First Letter of Each Word in an Array of Strings
function capitalizeFirstLetter(arr) {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
}

let words = ["hello", "world", "javascript", "is", "awesome"];
console.log(capitalizeFirstLetter(words)); 
//30. Calculate the Sum of Total Marks in an Array of Objects
function sumTotalMarks(arr) {
    return arr.reduce((sum, obj) => sum + obj.marks, 0);
}

let students = [
    { name: "Alice", marks: 85 },
    { name: "Bob", marks: 92 },
    { name: "Charlie", marks: 78 },
    { name: "David", marks: 90 }
];
console.log(sumTotalMarks(students)); 

//31. Merge Two Arrays with Extra Zeros
function mergeArraysWithZeros(arr1, arr2) {
    let maxLength = Math.max(arr1.length, arr2.length);
    let result = [];

    for (let i = 0; i < maxLength; i++) {
        if (i < arr1.length) result.push(arr1[i]);
        else result.push(0);

        if (i < arr2.length) result.push(arr2[i]);
        else result.push(0);
    }
    return result;
}
let array1 = [1, 2, 3];
let array2 = [4, 5, 6, 7, 8];
console.log(mergeArraysWithZeros(array1, array2)); 

//32. Reverse a String Without Using Built-in Methods
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString("hello")); 

//33. Deep Clone a Nested Object or Array
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (Array.isArray(obj)) {
        let arrCopy = [];
        for (let i = 0; i < obj.length; i++) {
            arrCopy[i] = deepClone(obj[i]);
        }
        return arrCopy;
    }

    let objCopy = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            objCopy[key] = deepClone(obj[key]);
        }
    }
    return objCopy;
}

let original_array = [1, [2, 3], [4, [5, 6]]];
let clonedArray = deepClone(original_array);
console.log(clonedArray); 
console.log(clonedArray === original_array); 

//34. Count Repeated Elements in an Array
function countRepeatedElements(arr) {
    let elementCount = {};
    for (let element of arr) {
        elementCount[element] = (elementCount[element] || 0) + 1;
    }
    return elementCount;
}

let a = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
console.log(countRepeatedElements(a)); 
//35. Generate Specified Pattern
function generatePattern(n) {
    let result = [];
    let left = 1;
    let right = n * (n - 1) / 2 + 1;

    for (let i = 1; i <= n; i++) {
        let row = [];
        for (let j = 1; j <= i; j++) {
            if (j % 2 === 1) {
                row.push(left++);
            } else {
                row.push(right++);
            }
        }
        result.push(row);
    }

    return result;
}

console.log(generatePattern(5));
