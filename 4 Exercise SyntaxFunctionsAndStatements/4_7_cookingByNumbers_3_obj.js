function someFunction(start, ...arr){
    let number=Number(start)
    let parcer={
        chop () {number/=2},
        dice () {number**=0.5},
        spice () {number+=1},
        bake () {number*=3},
        fillet  () {number*=0.8},
    }

    // let parcer={
    //     chop: number=> number/2,
    //     dice: number=> number**0.5,
    //     spice: number=> number+1,
    //     bake: number=> number*3,
    //     fillet: number=> number*0.8,
    // }

    for (const command of arr) {
        parcer[command]()
        // number = parcer[command](number)
    }
    console.log(number);
}

someFunction('32', 'chop', 'spice', 'fillet', 'dice', 'chop')