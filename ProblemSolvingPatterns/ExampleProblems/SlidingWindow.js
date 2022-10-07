/* Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should accumulate the maximum sum of n consecutive elements in the array. */



function maxSubarraySum(arr, num) {
    if (num > arr.length) return null
    //if the number is bigger than the array's length we cannot cycle through that many indexes, thus we return null.

    let max = -Infinity;
    //We wanted to initiate our max as the lowest thing possible, so that we can check for a new max upon the start of the loop. Helps us with an entirely negative array also.

    for (let i = 0; i < arr.length - num + 1; i++) {
        //we end here, because if we went all the way to the end. We would be trying to access indexes that aren't in the array and get undefined churned into the function. So we subtract num from the end to give us that clearance.

        temp = 0;
        //we want a new temp per each iteration of the loop. so that we can compare each iteration to the max. 
        for (let j = 0; j < num; j++) {
            if (temp > max) {
                max = temp
            }
        }
    } return max
}

//TIME COMPLEXITY O(N^2) because of nested loops.

//REFACTORED 

function maxSubarraySum2(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
        //loop through the array, but not the entire thing. We only want to go out as many as "num" spots.
    }
    tempSum = maxSum
    for (let j = num; j < arr.length; j++) {
        //NOW we loop through the entire array.
        tempSum = tempSum - arr[i - num] + arr[i]
        //at each iteration, we subtract the first number of the last iteration from tempSum and add the last of the current iteration to tempSum. 
        maxSum = Math.max(maxSum, tempSum)
        //at each iteration we are checking to see if the current tempSum is higher than the previous max. If it is, we set the maxSum to it. If not we keep truckin.
    }
    return maxSum
    //after the loop, we return the final maxSum
}

//Time Complexity - O(N) We loop twice, but no nested loops.