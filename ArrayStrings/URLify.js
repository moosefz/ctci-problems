function URLify(str) {
    let arr = str.split(" ");
    console.log(arr);
    console.log(arr.join("%20"));
}


URLify("Mr John Smith")