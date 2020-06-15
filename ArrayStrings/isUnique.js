// determine if a string has all unique characters

// REALLY BAD WAY TO DO IT -- O(n^2)
// Not using an additional data structure
function isUniqueBad(str) {
    for(let i = 0; i < str.length; i++) {
        for(let j = i + 1; j < str.length; j++) {
            if(str.charAt(i) === str.charAt(j)) {
                return false;
            }
        }
    }
    return true;
}


// using additional data structures
function isUnique(str) { // O(n), faster

    const mySet = new Set();

    for(let i = 0; i < str.length; i++) {
        if(mySet.has(str.charAt(i))) {
            return false; // not unique
        }
            mySet.add(str.charAt(i));
    }
    return true;
}

// without using additional data structure
// could sort the string, but that requires the string be an array in JS



console.log(isUniqueND("abzzzcadef"));
console.log(isUniqueBad("abcdef"));

