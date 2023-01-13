function someFunction(order){
    let engines= [{ power: 90, volume: 1800 }, { power: 120, volume: 2400 },{ power: 200, volume: 3500 }]
    let carriages=[{ type: 'hatchback', color: order.color },{ type: 'coupe', color: order.color}]
    let engine = {}
    let carriage = {}

    for (const eng of engines) {
        if (eng.power>=order.power){
            engine={...eng}
            break
        }
    }


    for (const carr of carriages) {
        if (carr.type===order.carriage){
            carriage={...carr}
            break
        }
    }
    let size=wheelsize(order.wheelsize)
    let wheels=[size, size, size, size]
    function wheelsize(wheelsize){

        if (wheelsize%2===0){
            return wheelsize-1
        }
        return wheelsize
    }
    //
    // console.log(engine);
    // console.log(carriage);
    return {
        model:order['model'],
        engine,
        carriage,
        wheels

    }
}

console.log(
    someFunction({ model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14 }
    ))
