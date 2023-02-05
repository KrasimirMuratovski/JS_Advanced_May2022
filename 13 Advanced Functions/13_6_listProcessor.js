function solve(input){
    let state=[]
    let operations={
        add: (string) => state.push(string),
        remove: (string) => state.splice(state.indexOf(string),1),
        print: () =>  console.log(state.join(','))
    }
    for (let el of input) {
        let [command, data]= el.split(' ')
        operations[command](data)
    }

}
solve(['add hello', 'add again', 'remove hello', 'add again', 'print'])
solve(['add pesho', 'add george', 'add peter', 'remove peter','print'])