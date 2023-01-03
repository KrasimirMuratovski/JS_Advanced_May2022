function start (arr) {
    let res = 0;
    for (let row = 0; row < arr.length; row++){
        for (let col = 0; col < arr[row].length; col++){
            let el = arr[row][col];
            if (row < arr.length - 1 && el === arr[row + 1][col]) {
                res += 1;
            }
            if ((col < arr[row].length - 1) && (el === arr[row][col + 1])) {
                res += 1;
            };
        };
    };
    // console.log(res)
    return res;
}

start([[2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]]
)