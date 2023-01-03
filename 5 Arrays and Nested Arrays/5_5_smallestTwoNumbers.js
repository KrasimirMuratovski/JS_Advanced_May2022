function someFunction(arr){
    arr.sort((a, b) => a-b)
    let newarr=arr.slice(0,2)
    // console.log(newarr)
    console.log(newarr.join(' '))

}

someFunction([30, 15, 50, 5])
someFunction([3, 0, 10, 4, 7, 3])