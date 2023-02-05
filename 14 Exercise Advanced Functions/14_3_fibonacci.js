function getFibonator(){
    let result=[0, 1]

    function fibo(){
        let current=result.shift()+result[0]
        result.push(current)
        return result[0]
    }
    return fibo
}





let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
