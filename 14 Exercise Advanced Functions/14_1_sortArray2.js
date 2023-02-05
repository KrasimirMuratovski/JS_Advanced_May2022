function solve(arr, type) {

    const methods = {
        asc: (a, b) => a - b,
        desc: (a, b) => b - a

    }
    arr.sort(methods[type])

    return arr
}

solve([14, 7, 17, 6, 8], 'asc')
solve([14, 7, 17, 6, 8], 'desc')