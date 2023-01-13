function someFunction(order) {
    let engines = [{power: 90, volume: 1800}, {power: 120, volume: 2400}, {power: 200, volume: 3500}]
    let carriages = [{type: 'hatchback', color: order.color}, {type: 'coupe', color: order.color}]
    let wheelsize = order.wheelsize % 2 === 1 ? order.wheelsize : order.wheelsize - 1

    return{
        model: order.model,
        engine:engines.filter(e=>e.power>=order.power)[0],
        carriage:carriages.filter(c=>c.type===order.carriage)[0],
        wheels:[wheelsize, wheelsize, wheelsize, wheelsize]
    }
}

console.log(
    someFunction({
            model: 'VW Golf II',
            power: 90,
            color: 'blue',
            carriage: 'hatchback',
            wheelsize: 14
        }
    ))
