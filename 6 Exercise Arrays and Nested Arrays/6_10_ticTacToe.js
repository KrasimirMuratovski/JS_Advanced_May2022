function someFunction(arr) {
    let board = [[false, false, false],
        [false, false, false],
        [false, false, false]]
    let coord
    let coordx
    let coordy
    let sign
    let winner = false
    let inneri = -1
    for (let i = 0; i < arr.length; i++) {
        inneri++
        if (inneri % 2 === 0) {
            sign = 'X'
        } else {
            sign = 'O'
        }

        coord = arr[i].split(' ')
        coordx = coord[0]
        coordy = coord[1]
        // console.log(board[coordx][coordy])
        if (board[coordx][coordy] === false) {
            board[coordx][coordy] = sign
        } else {
            console.log("This place is already taken. Please choose another!")
            inneri++
        }

        if (checkwinner(board) === 'O') {
            console.log(`Player O wins!`)
            winner = true
            break
        } else if (checkwinner(board) === 'X') {
            console.log(`Player X wins!`)
            winner = true
            break
        }
    }

    if (!winner) {
        console.log("The game ended! Nobody wins :(");
    }
    function checkwinner(board) {
        // let arr=[]
        // arr.
        for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
            const row = board[rowIndex];
            // console.log(row)
            if (row.every(x => (x === 'X'))) {
                return 'X'
            } else if ((row.every(x => (x === 'O')))) {
                return 'O'
            }

            const col = board.map(function (value, index) {
                return value[rowIndex]
            })

            if (col.every(x => (x === 'X'))) {
                return 'X'
            } else if ((col.every(x => (x === 'O')))) {
                return 'O'
            }


            if (board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X') {
                return 'X'
            }
            if (board[0][2] === 'X' && board[1][1] === 'X' && board[2][0] === 'X') {
                return 'X'
            }
            if ((board[0][0] === 'O') && (board[1][1] === 'O') && (board[2][2] === 'O')) {
                return 'O'
            }
            if (board[0][2] === 'O' && board[1][1] === 'O' && board[2][0] === 'O') {
                return 'O'
            }

        }
    }

    for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
        const row = board[rowIndex];
        console.log(row.join('\t'))
        }
}

someFunction(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]
)


