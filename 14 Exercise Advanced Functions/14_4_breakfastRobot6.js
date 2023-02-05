function solution() {
    const microelements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    };

    const recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
    };

    return function (input) {
        let command = input.split(" ");

        const operations = {
            restock,
            prepare,
            report,
        };

        let operation = operations[command[0]];
        return operation();

        function restock() {
            let product = command[..[1];//using closure to access the params
            let amount = Number(command[2]);
            if (microelements.hasOwnProperty(product)) {
                microelements[product] += amount;
                return "Success";
            }
        }

        function prepare() {
            let recipe = command[1];
            let amount = Number(command[2]);
            for (let product in recipes[recipe]) {
                if (
                    microelements[product] <
                    amount * recipes[recipe][product]
                ) {
                    return `Error: not enough ${product} in stock`;
                }
            }
            for (let product in recipes[recipe]) {
                microelements[product] -= amount * recipes[recipe][product];
            }

            return "Success";
        }

        function report() {
            return `protein=${microelements.protein} carbohydrate=${microelements.carbohydrate} fat=${microelements.fat} flavour=${microelements.flavour}`;
        }
    };
}