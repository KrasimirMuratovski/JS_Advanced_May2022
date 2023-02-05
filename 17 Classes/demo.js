// class Point{
//     constructor(x, y) {
//         this.x=x
//         this.y=y
//
//     }
//     static distance(p1, p2){
//         return Math.sqrt((p1.x-p2.x)**2 + (p1.y-p2.y)**2)
//     }
//
//     toString(){
//         return `${this.firstName} ${this.lastName})`
//     }
// }
//
// const myP1=new Point(1,1)
// const myP2=new Point(4,5)
// console.log(Point.distance(myP1, myP2))

// class Circle{
//     constructor(radius) {
//         this.radius=radius
//
//     }
//     get diameter(){
//         return this.radius*2
//     }
//     set diameter(value){
//         this.radius=value/2
//     }
// }
//
// const c=new Circle(10)
// console.log(c.diameter)

/**
 *
 */

// let set=new Set()
// set.add('w')
// set.has('w')

// let set=new Set()
// set.add('w')
// set.add('b')
// set.has('w')
// console.log(set.entries())
//



// class Example {
//     constructor(a, b) {
//         if (b===undefined && a instanceof Example) {
//             this.#initfromexample(a)
//         }  else {
//             this.#initfromnums
//         }
//     }
// #initfromnums(a, b){
//     this.a = a
//     this.b = b
// }
// #initfromexample(example){
//     this.a = example.a
//     this.b = example.b
// }
//     get a() {
//         return this._a
//     }
//
//     set a(value) {
//         if (typeof value != 'number') {
//             throw new Error('Invalid input')
//         }
//         this._a=value
//     }
//
//     get sample(){//another getter
//         return 'some result'
//     }
//
// }
//
// let ex1=new Example(3, 5)
// class Person{
//     constructor(firstName, lastName) {
//         this.firstName=firstName
//         this.lastName=lastName
//
//     }
//
//     toString(){
//         return `${this.firstName} ${this.lastName})`
//     }
// }
//
// const myPerson=new Person('Ivan', 'Ivanov')

let myMap= new Map()

myMap.set('one',1)
myMap.set('two',2)
console.log(myMap)
let mykeys=myMap.keys()


for (const mykey of mykeys) {
    console.log(`Keys:${mykey}, values ${myMap.get(mykey)}`)

}
let newMap=Array.from(myMap).sort((a,b)=>a[1]-b[1])



let map = new Map();
map.set("one", 1);
map.set("eight", 8);
map.set("two", 2);
let sorted = Array.from(map.entries())
    .sort((a, b) => a[1] - b[1]);
for (let kvp of sorted) {
    console.log(`${kvp[0]} -> ${kvp[1]}`);
}

// let myMap=new Map()
// myMap.set('first', 5)
// myMap.set(2, 2)
// myMap.has('first')