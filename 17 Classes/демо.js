class Person {
    constructor(name, age) {
        this.name=name
        this.age=age
    }
    sayHello () {console.log(`${this.name}says hi`)}
    
}

const myInstance = new Person('xyz',33)
const myInstance2 = new Person('Mara',33)
console.log(myInstance)
console.log(myInstance2)

