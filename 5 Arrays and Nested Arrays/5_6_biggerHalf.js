function someFunction(nums){
    nums.sort((a, b) => a-b)
    const res=[]

    for (let i = Math.floor(nums.length/2); i<nums.length; i++) {
        res.push(nums[i])
        
    }
    
    
    return res
}

console.log(someFunction([3, 19, 14, 7, 2, 19, 6]))