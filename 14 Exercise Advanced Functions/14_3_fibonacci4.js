function getFibonator() {
    return (function (){
        const temp=this.curr+this.next
        this.curr = this.next
        this.next=temp

        return this.curr


    })..bind({curr:0, next:1})
}



let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
