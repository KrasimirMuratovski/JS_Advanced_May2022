function someFunction(arr) {
    arr.sort((a, b) => a - b)
    let newarr = []
    while (arr.length != 0) {
        newarr.push(arr.shift())
        newarr.push(arr.pop())
    }

    // console.log(newarr);
    return newarr
}

someFunction([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])