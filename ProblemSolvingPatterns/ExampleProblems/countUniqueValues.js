/*
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted. 

----------------------------------------------------->

Have two pointers that start at the beginning of the array.
    - WHILE LOOP
  - i starts at 0 and j starts at 1.
  - j will move ahead the entire time. if the number at i is different than at j. 
  - i will move forward and replace that number with the one at j. 
  - if i and j are the same, j continues ahead. 
  - once j reaches the end of the array, we will count how many spots into the array i is. and this will indicate how many unique numbers there are. 

  [0, 1, 2, 3, 4, 5, 5] -> would expect there to be 6 unique characters

*/

function countUniqueValues(arr) {
    let i = 0;
    let j = 1;
    let unique = 0;

    while (j < arr.length) {
        if (arr[j] === arr[i]) {
            j++
        } else {
            i++
            arr[i] = arr[j]
            unique = i + 1
            j++
        }
    }
    return unique
}

countUniqueValues([1, 2, 2, 3, 4, 5, 5, 5, 7, 8])

// could also do this same thing with a for loop. 

function countUniqueValues2(arr) {
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j]
        }
    }
    return i + 1
}

//Both solutions are O(n) time because we only loop once!