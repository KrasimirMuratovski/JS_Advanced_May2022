function solve(arr){
    let brands={}

    // arr.forEach(e=>{
    //     let [brand, model, quantity]=element.split('|')
    // })

    for (const element of arr) {
        let [brand, model, quantity]=element.split('|')
        quantity=Number(quantity)
        if (!brands[brand]){
            brands[brand]={}
        }
        if (!brands[brand].hasOwnProperty(model)) {
            brands[brand][model]=0
        }
        brands[brand][model]=quantity

    }
    for (const brand in brands) {
        console.log(`${brand.trim()}`)
        // Object.entries((brands[brand])).forEach(el=>{
        //     console.log('###'+el[0].trimStart()+'-> '+el[1])
        // })
        for (const model in brands[brand]) {
            console.log('###'+`${model..trim()} -> ${brands[brand][model]}`)//Judge
        }
    }
}


solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
)