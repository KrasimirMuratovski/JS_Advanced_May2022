function someFunction(matrix) {

    let result = 0
    let matrx=matrix.length

    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
        for (let colindex = 0; colindex < matrix[rowIndex].length; colindex++) {

            let current = matrix[rowIndex][colindex]

            let compareX = matrix[Math.min((rowIndex + 1), matrx)][colindex]
            let compareY = matrix[rowIndex][Math.min((colindex+1),matrix[rowIndex].length)]
             // let compareY = matrix[rowIndex][colindex + 1]

            if (compareX === current) {
                result += 1
            }
            if (compareY === current) {
                result += 1
            }

        }
    }

    console.log(result);
    return result
}

someFunction([[2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]]
)
// someFunction([
//     ['test', 'yes', 'yo', 'ho'],
//     ['well', 'done', 'yo', '6'],
//     ['not', 'done', 'yet', '5']])
