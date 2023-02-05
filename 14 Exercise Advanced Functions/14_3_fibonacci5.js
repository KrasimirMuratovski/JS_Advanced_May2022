function getFibonator() {
    const result = function (){
        const next=result.prev+result.curr
        result.prev = result.curr
        result.curr=next

        return result.prev
    }
    //attaching properties to function
    result..prev=0
    result.curr=1

    return result
}



let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
