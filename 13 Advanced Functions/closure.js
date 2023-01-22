function start(){
    let counter = 0

    function increment(n){
        counter+=n
        console.log(counter);
    }

    return increment
}

const myCounter=start()
myCounter(1)
myCounter(1)
myCounter(1)