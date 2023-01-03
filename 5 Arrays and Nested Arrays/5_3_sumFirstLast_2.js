function firtsLast(params){
    let sum=0
    sum=Number([...params].shift())+ Number([...params].pop())
    console.log(sum);
}
firtsLast(['20', '30', '40'])