function solve(arr) {
    let juices = {}
    let bottles = {}
    for (const el of arr) {
        let [juice, quantity] = el.split(' => ')
        if (!juices[juice]) {
            juices[juice] = 0
            // juices.push()
        }
        juices[juice] += Number(quantity)
        for (const jui in juices) {
            let quantity = juices[jui]
            if (quantity >= 1000) {
                let current_bottles = Math.floor(quantity / 1000)
                bottles[jui] = current_bottles
            }
        }
    }
    // console.log(bottles)
    for (const bottle in bottles) {
        console.log(`${[bottle]} => ${bottles[bottle]}`)

    }
}


solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
)
solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
)
