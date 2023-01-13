function townsToJson(input) {

    const towns = [];
    const regex = new RegExp(/\s*\|\s*/);
    let nameTable = input.shift();

    for (const line of input) {
        let tokens = line.split(regex).filter(Boolean);
        towns.push({
            Town: tokens[0],
            Latitude: +Number(tokens[1]).toFixed(2),
            Longitude: +Number(tokens[2]).toFixed(2)
        });
    }
    return JSON.stringify(towns);
}