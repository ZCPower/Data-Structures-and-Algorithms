# Big O Notation

## Why does Big O matter? 

## Time Complexity

### Smaller terms don't matter. 
    - O(n + 10) can be reduced to O(n).
    - O(n^2 + 5n +8) can be reduced to O(n^2).

### Constants can be removed.
    - O(500n) can be reduced to O(n);
    - O(3) can be reduced to O(1).
    - O(10n^2) can be reduced to O(n^2).

### Big O Shorthands
    - Arithmetic operations are constant.
    - Variable assignments are constant
    - Accessing elements in an array or object is constant. 
    - In a loop, the complexity if the length of the loop times whatever happens within the loop.

## Space Complexity 
    - Most primitive data dtypes are constant space.
    - Strings require O(n) space. (n being string length)
    - Reference types (arrays and Objects) are generally O(n) where n is the length or the number of keys. 

### Logarithms and Section Recap 
    - A logarithm is the inverse of exponents.
    - log2(8) = 3 --> 2^3 = 8
    - log2(32) = 5 --> 2^5 = 32.
    - log 2 (value) = exponent / 2^exponent = value.
    - O(log n) is great complexity!



## Analyizing Performance of Arrays and Objects

### Big O of Objects
    - Insertion = O(1)
    - Removal = O(1)
    - Searching = O(N)
    - Accesss = O(1)

    Objects are great when we don't need any ordering. 

### Big O of Object Methods
    - Object.keys = O(n)
    - Object.values = O(n)
    - Object.entries = O(n)
    - hasOwnProperty = O(1)

### Big O of Arrays
    - Insertion = It depends.
        - Adding to end is O(1).
        - Adding to beginning is O(n)
    - Removal = It depends.
        - Removing from end is O(1)
        - Removing from beginning is O(n)
    - Searching = O(n)
    - Accesssing = O(1)

### Big O of Array Methods
    - push/pop = O(1)
        -adding/removing to end of array
    - shift/unshift = O(N)
        -adding/removing to beginning of array
    - concat = O(N)
        - merging two arrays (technically would be O(m+n))
    - slice / splice = O(N)
        - returns new array, so it is proportional to the amount of elements we were trying to copy
    - sort = O(N * log N)
        - See sorting algorithm section. 
    - forEach/map/filter/reduce/etc = O(N)
        - looping through each element in an array
 



