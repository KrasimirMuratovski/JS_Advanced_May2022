function someFunction(numsAsString) {
    // making copy of the array whithout modifying the original
    let first = [...numsAsString].shift()
    let last = [...numsAsString].pop()
    sum = Number(first) + Number(last)
    console.log(sum);
}

someFunction(['20', '30', '40'])