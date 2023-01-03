function myFunc(matrix) {

    let pairs = 0

    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[r].length; c++) {

            if ((c + 1 < matrix[r].length) && (matrix[r][c] === matrix[r][c + 1])) { pairs++ }


            if ((r + 1 < matrix.length) && (matrix[r][c] === matrix[r + 1][c])) { pairs++ }
        }
    }


    return pairs
}
myFunc([[2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]]
)
// someFunction([
//     ['test', 'yes', 'yo', 'ho'],
//     ['well', 'done', 'yo', '6'],
//     ['not', 'done', 'yet', '5']])
