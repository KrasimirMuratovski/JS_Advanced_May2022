function fibonacci() {
    let x = 0;
    let y = 1;
    let z = 0;
    return function getNext...() {
        [z, x, y] = [x, y, x + y];
        return x;
    };
}



let fib = fibonacci();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
