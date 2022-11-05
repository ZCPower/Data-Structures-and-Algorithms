# Searching Algorithms

## How do we Search? 
    - Given an array, the simplest way to search for a value is to look at a every element in the array and check if it's the value we want. 

### JavaScript has built in search features, but how do they work? (Linear Search)
    - indexOf
    - includes
    - find
    - findIndex

## Linear Search
  
### Linear Search Psuedocode
    - This function accepts an array and a value. 
    - Start at array, and loop through it and at each iteration check if array[i] is equal to what we're searching for.
    - If it is return that index.
    - If it is never found, return -1.

`
  function linearSearch(array, item){
 for (let i = 0; i < array.length; i++) {
     if (array[i] === item) return i
 }
 return -1
}
    `

    - Time complexity of this would be O(n)

### Linear Search Big O
    - Best case O(1) (we find what we're searching for immediately.)
    - Worst case O(n)
    - Average case O(n)

## Binary Search
    - Much faster form of search.
    - Instead of eliminating one element at a time, you can eliminate half of the remaining elements at a time. 
    - Only works on sorted arrays. 

### Divide and Conquer
    - Pick a pivot point in the middle and check if the item we're searching for is equal to, less than, or greater than our pivot point. We will split the resulting array in half based on the answer.

            Given Array                     Desired Number
    - [1,2,3,4,5,6,7,8,9,10,11,12]                 11.

    - so we would check the middle of the array which would be 7. 
    - 11 is higher than 7, so we can cut out everything before 7. 

    [7, 8, 9, 10, 11, 12]

    - Half way would round down to 10. so we can get rid of the left side again. 

    [10, 11, 12]

    -Half way is 11, which is our desired number! This was much faster than O(n) because we weren't going through every single element in the array. We only accessed 3 different elements as opposed to all the way up to 11. 

### Binary Search Big O Notation
    - Worst and Average Case = O(log n)
    - Best Case = O(1)

## Basic String Search
    -- Suppose you want to count the number of times a smaller string appears in a longer string.
    -- A straightforward approach involves checking pairs of characters individually.

   ### Basic String Search Pseudocode
    - Loop over a longer string
    - Loop over the shorter string. 
    - If the characters don't match, break out of the inner loop. 
    - If the characters do match, keep going.
    - If you complete the inner loo pand find a match, increment the count of matches
    - Return the count
