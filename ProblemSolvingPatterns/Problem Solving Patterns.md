# How to improve at algorithms / solving problems? 
 
## 1. Devise a plan for solving problems (Not fool-proof)

### Understand the problem
    1. Restate the problem in your own words.
    2. What are inputs that go into the problem?
    3. What are the outputs we are trying to return?
    4. Can outputs be determined from the inputs? In other words, do i have enough information to solve the problem?
    5. How should I label the important pieces of data that are part of the problem?

### Explore Concrete Examples
    - Start with simple examples
    - Progress to more complex examples
    - Explore examples to empty inputs
    - Explore examples for invalid inputs

### Break it Down
    -Explicitly write out the steps you need to take.
        - Forces you to think about your code before you actually write it. 
        - Catches any lingering uncertainties.
        - Gives a roadmap for your function/algorithm. 

### Solve/Simplify

### Look Back and Refactor

## 2. Master common problem solving patterns, Common Patterns Include:


### Frequency Counters
        - Use an object to collect a bunch of values(as keys) and their frequencies( as values)
        - This helps avoid the need for nested loops. Which would be a O(n^2) operation with strings/arrays.
        - Two seperate loops vastly better than a nested loop. O(2n) vs. O(n^2).
###  Multiple Pointers
        - Create two values or references that each correspond to a different index in an array.
        - Move these pointers towards the beginning, end, or middle of the array based on a provided condition.
        -Can start on the same end, seperate ends or in the middle going opposite directions. 
###  Sliding Window
        - This pattern involves creating a window which can either be an array or number from one position to another.
        - Depending on a certain condition, the window either increases or closes (and a new window is created)
        -Very useful for keeping track of a subset of data in an array/string etc.
###  Divide and Conquer
###  Dynammic Programming
###  Greedy Algorithms
###  Backtracking
###  Many more... 
