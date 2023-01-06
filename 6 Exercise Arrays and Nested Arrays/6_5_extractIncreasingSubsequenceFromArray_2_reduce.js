function someFunction(arr) {
    let maxnum = arr[0]
    let newarr = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= maxnum) {
            maxnum = arr[i]
            newarr.push(maxnum)
        }
    }
    // console.log(newarr);
    return newarr
}

someFunction([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24])
// someFunction([])