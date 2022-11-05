# What is sorting?
    - Sorting is the process of rearranging the items in a collect so that the items are in some kind of order. 

    Examples: 
    -- Sorting from smallest to largest
    -- Sorting names alphabetically
    -- Sorting movies by release year
    -- Sorting movies by revenue

## Why learn this?
    -- Sorting is a common task in programming, so it's good to know how they work. 
    -- There are many different ways to sort things, and different techniques have their own advantages and disadvantages. 
    -- Classic interview problem

## Objectives
    - Implement bubble sort
    - Implement selection sort
    - Implemenet insertion sort
    - Understand why it is important to learn these simpler sorting algorithms.

## Built in JavaScript Sort Method
    -- Uses unicode character score to sort by default, which is why the default sort doesn't sort numbers the way you would expect. 
    -- Accepts an optional comparator function. 
        -- This tells JS how you want it to sort.
        -- The comparator looks at pairs of elements (a,b), determines their sort order based on their value
            -- If it returns a negative number, a should come before b and vise versa.
            -- If it returns 0, a and b are the same.

## Time Complexity for Bubble Sort
    - O(n) at best (if we sort it on the first loop)
    -Average and worst = O(N^2) because we use nested loops. 