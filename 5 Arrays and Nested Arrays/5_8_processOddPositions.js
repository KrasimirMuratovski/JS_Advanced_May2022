function someFunction(nums){
    // const odd=nums.filter((x,i) => i%2)//returns only odd because i%2 returns 1(truthy)
    const odd=nums.filter((value, index, arr) => value%2)//returns only odd because i%2 returns 1(truthy)
    const doubled=odd.map(x => (x*2))
    doubled.reverse()
    console.log(doubled.join(' '));
}

someFunction([10, 15, 20, 25])