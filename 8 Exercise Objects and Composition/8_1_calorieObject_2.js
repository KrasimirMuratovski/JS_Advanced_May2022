function someFunction(arr){
    let result={}
    while(arr.length!==0){
        let product=arr.shift()
        let calories=arr.shift()
        result[product]=Number(calories)
    }
    console.log(result);
}

someFunction(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
someFunction(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])