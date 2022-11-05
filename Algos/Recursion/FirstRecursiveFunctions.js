function countDown(num) {
    if (num <= 0) {
        console.log(num, 'All Done!')
        return;
    }
    console.log(num)
    num--
    countDown(num)
}

countDown(3);
//prints 3 in console
//subtracts 1 from 3(num);
//countDown(2)
//prints 2 in console
//subtracts 1 from 2(num);
//countDown(1)
//prints 1 in console
//subtracts 1 from 1(num);
//countDown(0)
//prints '0 All Done!' in console.

function sumRange(num) {
    if (num === 1) return 1;   //base case
    return num + sumRange(num - 1) // recursive call. 
}

sumRange(3);
//return 3 + sumRange(2)
//return 2 + sumRange(1)
//return 1.

//this is how the call stack looks, so to get the answer we work backwards. 

//1 + 2 + 3 = 6. 

//Factorial Non-Recursively. 

function factorial(num) {
    let total = 1;
    for (let i = num; i > 0; i--) {
        total *= i
    }
    return total
} // Time Complexity = O(n)

//Factorial Recursively.

function factorial2(num) {
    if (num === 1) return 1
    return num * factorial2(num - 1)
}

factorial2(3)

//same principle as sumRange just multiplying instead of adding. 