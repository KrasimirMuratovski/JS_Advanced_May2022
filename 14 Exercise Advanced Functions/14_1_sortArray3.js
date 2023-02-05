function solve(arr, type) {
    return arr.sort((a, b) => (type == 'asc' ? a - b : b - a))
    // return arr.sort((a, b) => (type == 'asc' ? a - b : b - a))
}

console.log(solve([14, 7, 17, 6, 8], 'asc'))
console.log(solve([14, 7, 17, 6, 8], 'desc'))
