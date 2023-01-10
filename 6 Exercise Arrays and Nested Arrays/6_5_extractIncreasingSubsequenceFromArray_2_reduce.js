function solve(array) {
    let result = array.reduce((arr, current) => {
        if (arr.length) {
            if (current >= arr[arr.length - 1]) {
                arr.push(current);
            }
        } else {
            arr.push(current);
        }
        return arr;
    }, []);
    return result;
}
console.log(solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]))
// someFunction([])