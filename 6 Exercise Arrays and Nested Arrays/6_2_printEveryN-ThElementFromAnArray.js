function someFunction(arr, step){
    let newarr=[]
    for (let i = 0; i < arr.length; i+=step) {
        newarr.push(arr[i])

    }
    return newarr
}

console.log(someFunction(['5',
        '20',
        '31',
        '4',
        '20'],
    2

))
