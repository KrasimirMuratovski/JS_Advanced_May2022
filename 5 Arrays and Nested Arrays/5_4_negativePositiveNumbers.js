function someFunction(nums){
    let res=[]
    for (const num of nums) {

        if (num<0){
            res.unshift(num)
        }else{
            res.push(num)
        }
    }
    console.log(res.join('\n'));
}

someFunction([7, -2, 8, 9])
someFunction([3, -2, 0, -1])