function someFunction(radius){

    if (typeof radius=='number') {
        let area=radius**2*Math.PI
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof radius}.`)
    }
    // console.log(area.toFixed(2));
}

someFunction(5)
someFunction('Maria')