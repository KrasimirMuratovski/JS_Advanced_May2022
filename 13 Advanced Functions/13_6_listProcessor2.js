function solve(input){
    let state=[]
    let operations={
        remove(string){state = state.filter((el) => el !== string)},
        add(string){state.push(string)},
        print: () =>  console.log(state.join(','))
    }
    for (let el of input) {
        let [command, data]= el.split(' ')
        operations[command](data)
        // console.log(state)
        // console.log(command, data)
    }

}
solve(['add hello', 'add again', 'remove hello', 'add again', 'print'])
solve(['add pesho', 'add george', 'add peter', 'remove peter','print'])