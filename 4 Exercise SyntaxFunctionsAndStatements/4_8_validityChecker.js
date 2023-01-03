function someFunction(x1, y1, x2, y2) {
    x1 = Number(x1)
    x2 = Number(x2)
    y1 = Number(y1)
    y2 = Number(y2)
    let oneone = Number.isInteger(Math.sqrt((x1 ** 2) + (y1 ** 2)))
    let twotwo = Number.isInteger(Math.sqrt((x1 ** 2) + (y1 ** 2)))
    let onetwo = Number.isInteger(Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2)))


    if (oneone) {
        console.log(`{${x1}, ${x2}} to {0, 0} is valid`)
    } else {
        console.log(`{${x1}, ${x2}} to {0, 0} is invalid`)
    }
    if (twotwo) {
        console.log(`{${y1}, ${y2}} to {0, 0} is valid`)
    } else {
        console.log(`{${y1}, ${y2}} to {0, 0} is invalid`)
    }
    if (onetwo) {
        console.log(`{${x1}, ${x2}} to {${y1}, ${y2}} is valid`)
    } else {
        console.log(`{${x1}, ${x2}} to {${y1}, ${y2}} is valid`)
    }

}

someFunction(3, 0, 0, 4)
// someFunction(2, 1, 1, 1)