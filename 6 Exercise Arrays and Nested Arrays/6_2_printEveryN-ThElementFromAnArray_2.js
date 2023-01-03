function someFunction(arr, step) {
    return arr.filter((value, index, arr) => index % step == 0)
}

console.log(someFunction(['5',
        '20',
        '31',
        '4',
        '20'],
    2
))
