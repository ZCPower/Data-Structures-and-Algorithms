/*   Given a SORTED array of integers, write a function called search, that accepts a value and returns the index where the value is passed to the function is located. If the value is not found, return -1.   */

function search(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i
        }
    }
    return -1
}

//TIME COMPLEXITY OF O(n) (Linear Search)





/*        REFACTORED 

    We can instead divide the array in half by checking the value at arr.length / 2
    If the result is lower than the desired number, we will continue with the top half of the array. We will divide that array in half and compare the value to the desired number and continue until we get the value. 
*/

function search2(arr, val) {

    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2)
        let currentElement = arr[middle]

        if (currentElement < val) {
            min = middle + 1;
        } else if (currentElement > val) {
            max = middle - 1;
        } else {
            return middle
        }
        return -1
    }
}

//TIME COMPLEXITY = O(log (n))  -- BINARY SEARCH