function checkPermutation(str1, str2) { // O(n log n)

    if(str1.length !== str2.length) {
        return false; // not a permutation
    }

    let arr1 = str1.split("");
    let arr2 = str2.split("");

    arr1.sort(function(a,b) {
        return a.localeCompare(b);
    })

    arr2.sort(function(a,b) {
        return a.localeCompare(b);
    })

    if(arr1.join('') === arr2.join('')) {
        return true;
    } 
    return false;
}

console.log(checkPermutation("hello", "olleh"));