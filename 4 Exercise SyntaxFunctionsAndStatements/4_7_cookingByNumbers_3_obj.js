function coockingByNumbers(number, ...params) {

    let res = Number(number)
    for (let i = 0; i < params.length; i++) {

        let el = params[i]
        if (el === 'chop') {
            res = res / 2
            console.log(res);


        } else if (el === 'dice') {
            res = res ** 0.5
            console.log(res);

        } else if (el === 'spice') {
            res += 1
            console.log(res);

        } else if (el === 'bake') {
            res *= 3
            console.log(res);

        } else if (el === 'fillet') {
            res *= 0.8
            console.log(res);
        }
    }
}
