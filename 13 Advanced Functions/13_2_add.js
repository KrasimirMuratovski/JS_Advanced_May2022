function createProcessor(){
    let state=''

    function append(str){
        state+=str
    }
    function removeStart(n){
        state=state.slice(n)
    }
    function removeEnd(n){
        state=state.slice(0, -n)
    }
    function print(){
        console.log(state)
    }

    return {
        append,
        removeStart,
        removeEnd,
        print
    }



    // let firstZeroTest = solution();

    // append('hello');
    // append('again');
    // removeStart(3);
    // removeEnd(4);
    // print();

}

const proc= createProcessor()