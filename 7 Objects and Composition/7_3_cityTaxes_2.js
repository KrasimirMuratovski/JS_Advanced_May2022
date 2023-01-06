
function collectTaxes(){this.treasury+=Math.floor(this.population*this.taxRate)}
function applyGrowth(percent){this.population+=Math.floor(this.population*percent/100)}
function applyRecession(percent){this.treasury-=Math.floor(this.treasury*percent/100)}


function cityTaxes(name, population, treasury){
    const result={
        name,
        population,
        treasury,
        taxRate:10,
        collectTaxes,
        applyGrowth,
        applyRecession,

    }
    return result
}



const city =cityTaxes('Tortuga',7000,15000);
city.collectTaxes();
console.log(city.treasury);

city.applyGrowth(5);
console.log(city.population);

city.applyRecession(10);
console.log(city.treasury);
