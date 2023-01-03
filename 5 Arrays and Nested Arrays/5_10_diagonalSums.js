function someFunction(matrix){
    let diagone=[]
    let diagtwo=[]
    let sumarr=[]

    for (let i=0; i<matrix.length; i++){
        diagone.push(matrix[i][i])
        diagtwo.push(matrix[matrix.length-1-i][i])
    }

    sumarr.push(diagone.reduce((partialSum, a) => partialSum + a, 0))
    sumarr.push(diagtwo.reduce((partialSum, a) => partialSum + a, 0))
    // console.log(diagtwo.reduce((partialSum, a) => partialSum + a, 0));3
    console.log(sumarr.join(' '))

}

someFunction([[20, 40],[10, 60]])
someFunction([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
)

