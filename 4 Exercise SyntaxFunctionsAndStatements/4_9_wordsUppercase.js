function wUpCase(str) {
    // console.log(str.match(/\w+/g).join(", ").toLocaleUpperCase());
    return str.match(/\w+/g).join(", ").toLocaleUpperCase()
}

console.log(wUpCase('Hi, how are you?'))