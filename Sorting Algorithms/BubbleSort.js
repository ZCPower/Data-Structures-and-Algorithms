/* What is bubble sort?
   A sorting algorithm where the largest values bubble up to the top. 
*/

let ex = [5, 3, 4, 1, 2] //start
ex = ['3', '5', 4, 1, 2] //3 swaps with 5
ex = [3, '4', '5', 1, 2] //4 swaps with 5
ex = [3, 4, '1', '5', 2] //5 swaps with 1
ex = [3, 4, 1, '2', '5'] //5 swaps with 2
ex = [3, '1', '4', 2, 5] //4 swaps with 1
ex = [3, 1, '2', '4', 5] //4 swaps with 2
ex = ['1', '3', 2, 4, 5] //1 swaps with 3
ex = [1, '2', '3', 4, 5] //final sorted (2 swaps with 3)

/* Bubble Sort Pseduocode 
--------------------------------
-Start looping through the entirety of the array from end to beginning
-Start with an inner loop with a variable j from the beginning until i - 1
- If arr[j] is greater than arr[j+1], swap these two values!
*/

function bubbleSort(arr) {
    for (let i = arr.length; i >= 0; i--) {
        for (let j = 0; j < i - 1; j++) { //we don't need to go through the whole array here so we do i -1. We did this because going through the entire array would be redundant since we find the greatest number on the first pass through.
            if (arr[j] > arr[j + 1]) {
                temp = [arr[j], arr[j + 1]]
                arr[j] = temp[1];
                arr[j + 1] = temp[0]
            }
        }
    }
    console.log(arr)
    return arr
}

bubbleSort([3, 5, 1, 2])
bubbleSort([500, 2, -17, 82, 45, 37, 61, 11, 14, 88, -3])

//Bubble Sort Optimization! (If array is semi-sorted!)

function bubbleSort2(arr) {
    let noSwaps;
    for (let i = arr.length; i >= 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = [arr[j], arr[j + 1]]
                arr[j] = temp[1];
                arr[j + 1] = temp[0]
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    console.log(arr)
    return arr
}

//This is optimized because in the previous solution we can sort the array, but continue to try and sort until every iteration is checked. We create a variable that checks if we have swapped any numbers. If we have, we can continue to the next iteration. If none we swapped, it would be a waste of time to keep cycling through. So if a aswap is made, noSwaps is set to false. Else it remains true. If it's true at the end of a inner cycle, the loop breaks and returns the arr.