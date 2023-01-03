function someFunction(arr, flvone, flvtwo){
    let start=arr.indexOf(flvone)
    let end=arr.indexOf(flvtwo)+1
    let res=arr.slice(start, end)
    return res
}

console.log(someFunction(['Pumpkin Pie',
        'Key Lime Pie',
        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
))