function solve(arr) {
    let result = [];
    arr.sort((a, b) => a.localeCompare(b));
    console.log(arr)

    for (let i = 0; i < arr.length; i++) {
        let [product, price] = arr[i].split(" : ");
        let currentLetter = arr[i][0];
        if (i == 0) {
            result.push(currentLetter)
        }
        result.push(`  ${product}: ${price}`)
        if (i+1 < arr.length) {
            if (currentLetter != arr[i+1][0]) {
                result.push(arr[i+1][0]);
            }
        }
    }
    console.log(result.join("\n"))
}

solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)