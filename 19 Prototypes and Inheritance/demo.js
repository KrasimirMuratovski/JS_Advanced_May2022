const obj={
    name:'Peter',
    age:23
}

// obj.lastName='Petrov'

// console.log(obj)
// console.log(Object.getOwnPropertyDescriptors(obj))
Object.defineProperty(obj, 'name', {enumerable:false})
// console.log(Object.getOwnPropertyDescriptors(obj))

let lastName='Peshov'
Object.defineProperty(obj, 'lastName', {
    // get: ()=>'addedProperty',
    get() {return this._lastName},
    set(value) {
        if (typeof value!=='string'){
            throw new TypeError('Invalid input')
        }
        this._lastName=value
    },
    enumerable:true,
    configurable:true,
})
console.log(obj.lastName)

obj.lastName=Goshov
// console.log(obj)

console.log(obj.lastName)
