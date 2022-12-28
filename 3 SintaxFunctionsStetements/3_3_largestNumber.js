function someFunction(a, b, c){
    let max_num=Math.max(a,b,c);
    // if (a>=b && a>=c) {
    //     max_num=a
    // } else if (b>=a && b>=c) {
    //     max_num=b
    // } else {
    //     max_num=c
    // }
    // console.log('The largest number is '+ max_num +'.');
    console.log(`The largest number is ${max_num}.`);
}

someFunction(1,2,3)
someFunction(1,3,2)
someFunction(3,2,1)

