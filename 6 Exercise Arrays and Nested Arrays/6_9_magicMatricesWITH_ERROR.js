function someFunction(matrix) {
    let isMagical = true

    for (let index = 0; index < matrix.length - 1; index++) {
        let sumRowOne = matrix[index].reduce((a, v) => a + v, 0)
        let sumRowTwo = matrix[index + 1].reduce((a, v) => a + v, 0)
        let sumColOne = 0
        let sumColTwo = 0

        for (let j = 0; j < matrix.length; j++) {
            sumColOne += matrix[index][j]//error here, correct is [j][index]
            sumColTwo += matrix[index+1][j]//error here, correct is [j][index+1]
        }

        if (sumRowOne !== sumRowTwo || sumColOne !== sumColTwo) {
            isMagical = false
        }
    }
    // return isMagical
    console.log(isMagical)
}

someFunction([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
)