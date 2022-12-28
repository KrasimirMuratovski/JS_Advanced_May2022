function sameNumbers(num){
    let myStr=String(num)
    let ch=myStr[0]
    let flag =true
    let sum=0
    for (current of myStr){
        sum+=Number(current)
        if (ch!=current){
            flag=false
        }
    }
    console.log(flag)
    console.log(sum)

}
sameNumbers('34333')
// let myStr=String(num)
// let ch=myStr[0]
// // myStr.ma


