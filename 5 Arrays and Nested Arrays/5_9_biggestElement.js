function someFunction(matrix){
    let arr_max=[]
    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
        const row = matrix[rowIndex];
        arr_max.push(Math.max(...row))
        // for (let colindex = 0; colindex < row.length; colindex++) {
        //     console.log(row[colindex]);
        // }
    }

    console.log(Math.max(...arr_max))


}

someFunction([[20, 50, 10],[8, 33, 145]])
someFunction([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
)
// someFunction([3, 0, 10, 4, 7, 3])