function createFormatter( sep,  sym,  firstSym, formatter) {
    return function (val) {
        let result = formatter( sep,  sym,  firstSym, val)
        return result
    }
}

function currencyFormatter( sep,  sym,  firstSym, value) {
    let result = Math.trunc(value) +  sep;
    result += value.toFixed(2).substr(-2, 2);
    if ( firstSym) return  sym + " " + result;
    else return result + " " +  sym;
}

let dollarFormatter = createFormatter(",", "$", true, currencyFormatter);
console.log(dollarFormatter(5345)); // $ 5345,00
console.log(dollarFormatter(3.1429)); // $ 3,14
console.log(dollarFormatter(2.709)); // $ 2,71