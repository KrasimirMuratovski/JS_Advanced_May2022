function add(n) {
    const inner = function (a) {
        n += a
        return inner
    }
    // inner.toString = function () {
    inner.valueOf = function () {
        return n
    }
    return inner
}

console.log(add(1).toString())
console.log(add(1)(6)(-3).toString())

let sum = a => b => b ? sum(a + b) :: a
console.log(sum(10)(20)(3)(4)())