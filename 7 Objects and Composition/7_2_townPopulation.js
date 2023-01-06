function someFunction(list){
    const cities={
    }
    for (const element of list) {
        const tokens=element.split(' <-> ')
        const name=tokens[0]
        let population=Number(tokens[1])

        if (cities[name]) {
            cities[name]+=population
        }else {
            cities[name]=population
        }
    }

    //
    // for (let town in cities) {
    //     console.log(`${town} : ${cities[town]}`)

    for (let [city_name, population] of Object.entries(cities)) {
        console.log(`${city_name} : ${population}`)
    }
}

someFunction(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
)
someFunction(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']

)