
function someFunction(names){
    names.sort((a, b) => a.localeCompare(b)).forEach((e, i) => console.log((i+1)+'.'+e))
}

someFunction(["John", "Bob", "Christina", "Ema"])