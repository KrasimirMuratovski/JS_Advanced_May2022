function biggestHalf(nums){

    return nums.sort((a, b) => a-b).slice(-Math.ceil(nums.length/2))
}

console.log(biggestHalf([3, 19, 14, 7, 2, 19, 6]))