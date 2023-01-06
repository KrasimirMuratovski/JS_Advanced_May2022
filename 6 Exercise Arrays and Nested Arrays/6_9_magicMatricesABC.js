function someFunction(matrix) {
    let isMagical = true

    for (let index = 0; index < matrix.length - 1; index++) {
        let sumRowOne = matrix[index].reduce((a, v) => a + v, 0)
        let sumRowTwo = matrix[index + 1].reduce((a, v) => a + v, 0)
        let sumColOne = 0
        let sumColTwo = 0

        for (let j = 0; j < matrix.length; j++) {
            sumColOne += matrix[j][index]//0 0; 1 0; 2 0
            sumColTwo += matrix[j][index+1]//0 1; 1 1; 2 1
        }

        if (sumRowOne !== sumRowTwo || sumColOne !== sumColTwo) {
            isMagical = false
        }
    }
    return isMagical
    // console.log(isMagical)

}

// someFunction([['A', 'B', 'C'],
//     ['D', 'E', 'F'],
//     ['G', 'H', 'I']])
// // )
console.log(someFunction([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
))