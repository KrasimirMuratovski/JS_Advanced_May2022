function someFunction(herroes){
    let result=[]
    for (const hero of herroes) {
        let hero_data=hero.split('/')
        let name=hero_data[0].trim()
        let level=Number(hero_data[1])
        let items = hero_data[2]
        if (items){
            items=items.split(', ').map(x =>x.trim())
        }else{
            items=[]
        }



        // console.log(items)
        let obj={
            name,
            level,
            items
        }
        result.push(obj)
    }
    // console.log(JSON.stringify(result));

    return JSON.stringify(result)
}

someFunction(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
)

let obj={
    "name":"Isacc",
    "level":25,
    "items":["Apple","GravityGun"]
}