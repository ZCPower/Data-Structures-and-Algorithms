/* Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging letters of another, such as cinema, formed from iceman. */

//I see two possible solutions. 
/* Solution One
    -before we create loop, check that strs are the same length if not return false
    -create a loop that iterates through loop 1 and checks arr2.indexOf(arr[i])
    - if this is -1, we return false.
    - else we would splice that number out of arr2 and continue. if we reach the end of arr1, return true. 
*/


function validAnagram(str1, str2) {

    if (str1.length !== str2.length) {
        return false
    }

    for (let i = 0; i < str1.length; i++) {
        let letter = str1[i]
        let idx = str2.indexOf(letter)

        if (idx === -1) {
            return false
        }
        else {
            str2.slice(idx, 1, 'here')
        }
    }

    return true
}

validAnagram('zipza', 'pizza')
// Time Complexity O(n^2)
// We create a loop and use .indexOf - which itself loops through the string
//and creates a nested for loop.


/*
    Second solution: 
        - Create an obj for each string (ob1, ob2).
        - create two loops, one for each string.
        - loop through and check if that letter is in the object. 
            - if it is, add one to the value, if not set value to one.
        - create a for in loop to cycle through obj1[letter] and see if it is equal to obj2[letter]
                - if it is, continue
                - if not, return false
*/

function validAnagram2(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }

    let obj1 = {};
    let obj2 = {};

    for (let i = 0; i < str1.length; i++) {
        obj1[str1[i]] ? obj1[str1[i]]++ : obj1[str1[i]] = 1
    }

    for (let j = 0; j < str2.length; j++) {
        obj2[str2[j]] ? obj2[str2[j]]++ : obj2[str2[j]] = 1
    }

    for (let letter in obj1) {
        if (obj1[letter] !== obj2[letter]) {
            return false
        }
    }
    return true
}

validAnagram2('anagramd', 'danagmar')

//Time complexity should reduce to O(n).
//We have 3 different loops. so O(3n) reduces to O(n).



// Colt's solution: 

function validAnagram3(first, second) {
    if (first.length !== second.length) return false;

    const lookup = {};

    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        lookup[letter] ? lookup[letter]++ : lookup[letter] = 1
    }

    for (let j = 0; j < second.length; j++) {
        let letter = second[j];
        if (!lookup[letter]) return false
        else lookup[letter]--
    }
    return true
}

validAnagram3('pizfa', 'pizza')

//this is still O(n), but only has two loops instead of 3. Saves on space and time complexity and code brevity.