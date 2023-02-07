function Person(name, age){
    this.name=name
    this.age=age

}

Person.prototype.sayHi = function(){
    console.log(this.name + ' says hello!')
}
// Person.prototype.nationality='Bulgarian'
Person.nationality='Bulgarian'

const myPerson=new Person('Ivan', 23)
console.log(Object.getPrototypeOf(myPerson))
myPerson.sayHi()

Person.prototype={

}
