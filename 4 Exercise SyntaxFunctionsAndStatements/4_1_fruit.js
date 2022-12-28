function fruit(fruit, weight, price){
    let kgs=weight/1000;
    let money = price*kgs
    console.log(`I need $${money.toFixed(2)} to buy ${kgs.toFixed(2)} kilograms ${fruit}.`);


}

fruit('apple', 4000, 2)
