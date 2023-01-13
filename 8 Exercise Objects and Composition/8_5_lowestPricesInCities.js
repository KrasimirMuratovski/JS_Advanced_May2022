function someFunction(input){
    let products={}
    for (let arrElement of input) {
        let current=arrElement.split(' | ')

        let town=current[0]
        let product=current[1]
        let price=Number(current[2])

        // if (products[product]){
        if (products.hasOwnProperty(product)){
            if (products[product].price>price){
                products[product] ={town, price}
            }
        }else{
            products[product]={town, price}
        }


    }
    // console.log(products)
    let productNames=Object.keys(products)//arr with keys
    for (let i = 0; i < productNames.length; i++) {
        let productName=productNames[i]//take the i- el from the arr
        //                                    key/ value of the 'price'  key/ value of the 'town'
        console.log(`${productName} -> ${products[productName].price} (${products[productName].town})`)

    }

    //OR
    // for (const product in products) {
    //     //          Takes the key           price                           town
    //     console.log(`${product} -> ${products[product].price} (${products[product].town})`)
    //
    // }
    // console.log(result)
}

someFunction(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
)
// someFunction()
// someFunction()
// someFunction()