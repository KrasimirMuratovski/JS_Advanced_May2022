class Person{
    constructor(firstName, lastName, age, email) {
        this.firstName=firstName
        this.lastName=lastName
        this.age=age
        this.email=email
    }

    toString(){
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }
}

const myPerson=new Person('Ivan', 'Ivanov', 23, 'some@email.bg')
console.log(myPerson.toString())