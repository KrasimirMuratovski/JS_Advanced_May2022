function someFunction(arr){
    let result={}
    for (let i = 0; i < arr.length-1; i+=2) {
        result[arr[i]]=Number(arr[i+1])
    }
    console.log(result);
}

someFunction(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
someFunction(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])