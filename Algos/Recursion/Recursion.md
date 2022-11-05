# Recursion

## What is recursion?
    - A process (a function) that calls itself. 
    - Invoke the same function with a different input until you reach your base case.

### Base Case
    - The condition when the recursion ends.
    - Without this, the function would loop infinitly. 


## Common Recursion Pitfalls
    - No base case or base case is incorrect. Continuously adding calls to the call stack. 
    - Forgetting to return or returning the wrong thing.
    - Stack Overflow!

## Helper Method Recursion
   ### Revisit This Later. ***


## Pure Recursion
 - Everything is within the function and not accessing an external data structure.

    ### Pure Recursion Tips
        - For arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them. 
        - Strings are immutable, so you will need to use methods like slice, substr, or substring to make copies of strings.
        - To make copies of objects use Object.assign, or the spread operator. 