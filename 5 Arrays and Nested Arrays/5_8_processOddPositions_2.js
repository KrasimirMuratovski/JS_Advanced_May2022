const solve=  nums=> nums
    .filter((x, i) => i%2!=0)
    .map(x=> x*2)
    .reverse()
    .join(' ')


console.log(solve([10, 20, 30, 40]))