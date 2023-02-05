function solution() {
    let stock = { protein: 0,carbohydrate: 0,fat: 0,flavour: 0}//define storage
    let recipies = {//define recipies
        apple: {carbohydrate: 1, flavour: 2},
        lemonade: {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        eggs: {protein: 5, fat: 1, flavour: 1},
        turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
    }

    let commands = {//reference to the supportive functions
        restock,
        prepare,
        report,
    };

    return manager
    function manager(line) {//distribution function
        let [command, param, qty] = line.split(' ')
        return commands[command](param, qty)}//>>call supportive function through the object commands
    function restock(type, qty) {
        stock[type] += Number(qty)
        return 'Success'
    }
    function prepare(ordered, qty) {//
        qty=Number(qty)
        //find recipe//lemonade:{carbohydrate:10, flavour:20}
        //we use Object.entries, because !!!does not modify the object!!!, but returns array
        const recipe = Object.entries(recipies[ordered])//array of arrays!!!
            // [ [ 'carbohydrate', 10 ], [ 'flavour', 20 ] ]

        //calculate the total ingredient quantity
        //each 'ingredient' is array with ingredient quantity >>[ 'carbohydrate', 10 ]
        // If we had destructored the recipie in //calculate total ingredient quantity,
        // the modification of the primitive type(value) will not be reflected in the recipie
        recipe.forEach(ingredient =>ingredient[1]*=qty)

        //compare one by one with stock
        for (const [ingredient, required] of recipe) {
            if (stock[ingredient]<required){
                //if one is not sufficient
                return `Error: not enough ${ingredient} in stock`
            }
        }
        //otherwise  - update the quantities in the stock
        recipe.forEach(([ingredient,required]) => stock[ingredient]-=required)
        return 'Success'
    }

    function report() {
        return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`
    }

}

let manager = solution();
console.log(manager("restock flavour 50")); // Success
console.log(manager("restock protein 40")); // Success
console.log(manager("restock fat 100")); // Success
console.log(manager("restock carbohydrate 90")); // Success
console.log(manager("restock fat 100")); // Success
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock
console.log(manager('report')); // Error: not enough carbohydrate in stock
