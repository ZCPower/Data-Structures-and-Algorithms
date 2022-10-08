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