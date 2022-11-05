/* Similar to bubble sort, but instead of first placing the large values into sorted position, it places small values into sorted positions

[5, 3, 4, 1, 2]

We want to look for minimum and put it at the front. 

[1, 3, 4, 5, 2]
[1, 2, 4, 5, 3]
[1, 2, 3, 5, 4]
[1, 2, 3, 4, 5]

Selection Sort Pseudocode
- Store the first element as the smallest value you've seen so far.
- Compare this item to the next item in the array until you find a smaller number. 
- If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
- If the "minimum" is not the value (index) you initially began with, swap the two values. 
- Repeat next element until the array is sorted.
*/

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) lowest = j

        }
        if (i !== lowest) {
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    console.log(arr)
    return arr
}

selectionSort([5, 7, 2, -1, 20, 1, 12, 3,])