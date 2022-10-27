// ## Binary Search Pseudocode
// --Function accepts a sorted array and value.
//     --Create a pointer at the start of the array, and a right pointer at the end of the array. 
//     --While the left pointer comes before the right pointer:
// --Create a pointer in the middle(between start and end pointers)
// --If the value is too small, move the left pointer up.
//     --If the value is too large, move the right pointer down.
//     --If you never find the value, return -1

function binarySearch(arr, elem) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2)

    while (arr[middle] !== elem && start <= end) {
        if (elem < arr[middle]) end = middle - 1;
        else start = middle + 1
        middle = Math.floor((start + end) / 2)
    }

    if (arr[middle] === elem) {
        return middle
    } else return - 1
}

// binarySearch([2, 5, 6, 7, 9, 10, 11, 13, 14, 15, 28], 15)
binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33)

//[2, 5, 6, 7, 9, 10, 11, 13, 14, 15, 28]   START OF FUNCTION
//S                M                  E

//[2, 5, 6, 7, 9, 10, 11, 13, 14, 15, 28]   First Iteration
//                     S       M      E

//2, 5, 6, 7, 9, 10, 11, 13, 14, 15, 28]   Second Iteration
//                            S  M  E
