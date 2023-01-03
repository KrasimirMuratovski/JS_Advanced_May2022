function evenPos(arr){
    let newArr = []
    for (let i=0; i<arr.length; i+=2){
        newArr+=arr[i]+" "

    }
    console.log(newArr);
}

evenPos(['20', '30', '40', '50', '60'])