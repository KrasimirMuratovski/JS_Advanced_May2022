function daysInAmonth(m, y){
    return new Date(y, m, 0).getDate();
}


console.log(daysInAmonth(1, 2022))
console.log(daysInAmonth(2, 2022))
console.log(daysInAmonth(2, 2023))

