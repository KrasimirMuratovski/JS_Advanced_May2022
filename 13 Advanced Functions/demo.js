//
//
// const obj={
//     name:'Peter',
//     method() {
//         const func= () => console.log(this)
//
//         func()
//     }
// }
// obj.method()
//

//
// users = [
//     {name: 'One', age: 20},
//     {name: 'Two', age: 21},
//     {name: 'Three', age: 22},
// ]
//
// getName = (users)=> users.name
// usernames=users.map(getName)
// console.log(usernames)

// const array1 = [1, 2, 3, 4];
//
// // 0 + 1 + 2 + 3 + 4
// // const initialValue = 100;
// const sumWithInitial = array1.reduce(
//     (accumulator, currentValue) => accumulator + currentValue);
//
// console.log(sumWithInitial);
// // Expected output: 10


users = [ { name: 'Tim', age: 25 },
          { name: 'Sam', age: 30 },
          { name: 'Bill', age: 20 } ];

getName= (user)=>user.name
usernames=users.map(getName)
console.log(usernames)