function stringCompression(str) {
    let arr = str.split("");
    let count = 1;
    let strComp = [];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === arr[i+1]) {
            count++;
        } else if(arr[i] !== arr[i+1]) {
            if(count !== 1) {
                strComp.push(arr[i]);
                strComp.push(count);
            } else {
                count = 1;
                strComp.push(arr[i]);
                strComp.push(count);
            }
            count = 1; // reset counter
        }
    }

    return strComp.join("");
}

// cleaner way to do it - both still O(n), using string builder
function stringCompression2(str) {
    let count = 1;
    let strComp = "";

    for(let i = 0; i < str.length; i++) {
        if(str.charAt(i) === str.charAt(i+1)) { // matching char
            count++;
        } else if(str.charAt(i) !== str.charAt(i+1)) { // not matching char
            strComp += str.charAt(i);
            strComp += count;
            count = 1;
        }
    }
    return strComp;
}


console.log(stringCompression2("aabbccddeeff"));

