function solution() {

    let stocks = {
        carbohydrate: 0,
        flavour: 0,
        fat: 0,
        protein: 0
    }

    let menu = {
        apple:{
            carbohydrate: 1,
            flavour: 2,
            decreaseCurrentStocks: function(c, l){
                this.carbohydrate -= c;
                this.flavour -= l
            }
        },
        lemonade:{
            carbohydrate: 10,
            flavour: 20,
            decreaseCurrentStocks: function(c, l){
                this.carbohydrate -= c;
                this.flavour -= l
            }
        },
        burger:{
            carbohydrate: 5,
            fat: 7,
            flavour: 3,
            decreaseCurrentStocks: function(c, ft, flv){
                this.carbohydrate -= c
                this.fat -= ft
                this.flavour -= flv
            }
        },
        eggs:{
            protein: 5,
            fat: 1,
            flavour: 1,
            decreaseCurrentStocks: function(p, ft, flv){
                this.protein -= p
                this.fat -= ft
                this.flavour -= flv
            }
        },
        turkey:{
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10,
            decreaseCurrentStocks: function(p, c, ft, flv){
                this.protein -= p
                this.carbohydrate -= c
                this.fat -= ft
                this.flavour -= flv
            }
        },
    }


    return function (order) {
        let [command, mealOrIngredient, quntity] = order.split(' ');
        let notInStocks;
        let numberOfIngredients;

        if (command === 'prepare'){
            numberOfIngredients = Object.values(menu[mealOrIngredient]).length - 1
            let ingredients = Object.entries(menu[mealOrIngredient]).slice(0, numberOfIngredients);
            for (let [name, value] of ingredients){
                if (value * quntity > stocks[name]){
                    notInStocks = name
                    break
                };
            };
        }

        if (!notInStocks) {

            if (command === "restock"){
                stocks[mealOrIngredient] += Number(quntity)
                return 'Success';
            } else if (command === "prepare"){
                let ingredientsValues = Object.values(menu[mealOrIngredient]).slice(0, numberOfIngredients);
                for (let i = 1; i <= Number(quntity); i++){
                    menu[mealOrIngredient].decreaseCurrentStocks.call(stocks, ...ingredientsValues)
                };
                return 'Success';
            } else if (command === "report") {
                return `protein=${stocks.protein} carbohydrate=${stocks.carbohydrate} fat=${stocks.fat} flavour=${stocks.flavour}`
            };

        } else {
            return `Error: not enough ${notInStocks} in stock`
        };

    };

}