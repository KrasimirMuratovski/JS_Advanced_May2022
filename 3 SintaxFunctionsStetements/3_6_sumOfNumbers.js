function sumOfNumbers(a, b){
    let n1=Number(a)
    let n2=Number(b)
    let sum=0;
    for (let i=n1; i<=n2; i++){
        sum+=i
    }
    return sum;

}
console.log(sumOfNumbers(4, 10))
