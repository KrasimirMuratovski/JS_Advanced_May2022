function solve() {
    let types = {};
    for (let arg of arguments) {
        console.log(`${typeof arg}: ${arg}`);
        if (!types[typeof arg]) {
            types[typeof arg] = 1;
        } else {
            types[typeof arg]++;
        }
    }

    Object.keys(types)
        .sort((a, b) => types[b] - types[a])
        .forEach((k) => console..log(`${k} = ${types[k]}`));
}
solve('cat', 42, function () { console.log('Hello world!'); })