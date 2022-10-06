### Why does Big O matter? 

Time Complexity

### Smaller terms don't matter. 
    - O(n + 10) can be reduced to O(n).
    - O(n^2 + 5n +8) can be reduced to O(n^2).

###Constants can be removed.
    -O(500n) can be reduced to O(n);
    O(3) can be reduced to O(1).
    O(10n^2) can be reduced to O(n^2).

###Big O Shorthands
    - Arithmetic operations are constant.
    - Variable assignments are constant
    - Accessing elements in an array or object is constant. 
    - In a loop, the complexity if the length of the loop times whatever happens within the loop.

###Space Complexity 
    - Most primitive data dtypes are constant space.
    - Strings require O(n) space. (n being string length)
    - Reference types (arrays and Objects) are generally O(n) where n is the length or the number of keys. 

### Logarithms and Section Recap 
    - A logarithm is the inverse of exponents.
    - log2(8) = 3 --> 2^3 = 8
    - log2(32) = 5 --> 2^5 = 32.
    log 2 (value) = exponent / 2^exponent = value.
    O(log n) is great complexity!
