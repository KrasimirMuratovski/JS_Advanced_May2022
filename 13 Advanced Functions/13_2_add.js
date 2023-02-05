function solution(result){
    let res=Number(result)
    function add(number){
        resNew=res+Number(number)
        return  resNew
    }

    return add
}
let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));
console.log(add7(9));
