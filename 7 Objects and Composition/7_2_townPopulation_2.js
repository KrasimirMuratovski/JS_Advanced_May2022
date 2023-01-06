function TownPopulation(input) {
    let cities ={};
    for (let line of input) {
        let tokens = line.split(" <-> ")
        let name = tokens[0];
        let population = Number(tokens[1])
        
        if(cities.hasOwnProperty(name)){
            let city_population = cities[name]+population;
            cities[name] = city_population;
        }else{
            cities[name] = population
        }
    }
    for(let key in cities){
        console.log(`${key} : ${cities[key]}`);
    }
}
// TownPopulation(['Sofia <-> 1200000',
//     'Montana <-> 20000',
//     'New York <-> 10000000',
//     'Washington <-> 2345000',
//     'Las Vegas <-> 1000000']
// )
TownPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']

)