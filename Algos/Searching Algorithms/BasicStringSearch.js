//  ### Basic String Search Pseudocode
//     - Loop over a longer string
//         - Loop over the shorter string. 
//     - If the characters don't match, break out of the inner loop. 
//     - If the characters do match, keep going.
//     - If you complete the inner loo pand find a match, increment the count of matches
//     - Return the count

function basicSearch(long, short) {
    let count = 0;
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            if (short[j] !== long[i + j]) {
                break;
            }
            if (j === short.length - 1) {
                count++;
            }
        }
    }
    console.log(count)
    return count
}

basicSearch('boston biscuits buttons', 't')