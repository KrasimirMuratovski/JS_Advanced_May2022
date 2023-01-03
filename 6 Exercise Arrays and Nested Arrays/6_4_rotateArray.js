function someFunction(arr, rotattions) {
    let rot = rotattions % arr.length
    for (let i = 0; i < rot; i++) {
        arr.unshift(arr.pop())


    }
    console.log(arr.join(' '));
}

someFunction(['1',
        '2',
        '3',
        '4'],
    100006
)