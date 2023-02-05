function solution(){
    let storage={}
    let recipies={
        apple:{carbohydrate:1, flavour:2},
        lemonade:{carbohydrate:10, flavour:20},
        burger:{carbohydrate:5, fat:7, flavour:3},
        eggs:{protein:5, fat:1, flavour:1},
        turkey:{protein:10, carbohydrate:10, fat:10, flavour:10}
    }

    function manager(arr){
        let [command, ingredient, quantity]=arr.split(' ')
        // console.log(command, ingredient, quantity, ingredient, quantity)
        if (command ==='restock') {
            if (!storage[ingredient]){
                storage[ingredient]=0
            }
            storage[ingredient]+=Number(quantity)
            // console.log(storage)

        } else if (command ==='prepare') {
            // console.log('else if')
            prepare(ingredient, quantity)

        } else {
            console.log('else')
        }

        function prepare(item, quantity){
            //item:lemonade
            let product=recipies[item]//lemonade:{carbohydrate:10, flavour:20}
            for (const ingredient in product) {
                console.log('ingredient', ingredient)
                let elQuantity=Number(product[ingredient])
                // console.log('quantity', elQuantity)
                     //search in the storage: item/quantity
                let inStorage=storage[ingredient]
                console.log(inStorage)
                // console.log(storage[ingredient])
                     //check if quantity is enough and decrease or alert

            }

            // console.log(item, quantity, product);
        }

        // console.log(commands)
        return 'yess'
    }
    return manager
}

let manager = solution ();
console.log (manager ("restock flavour 50")); // Success
console.log (manager ("restock protein 40")); // Success
console.log (manager ("restock fat 100")); // Success
console.log (manager ("restock carbohydrate 90")); // Success
console.log (manager ("restock fat 100")); // Success
console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in stock
