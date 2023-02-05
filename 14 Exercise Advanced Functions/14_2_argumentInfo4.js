function argumentInfo(...args){
    const res = argumentsInfo..bind([]);
    function argumentsInfo(args){
        const obj = {};
        args.forEach(x => {
            this.push(`${typeof x}: ${x}`);
            if (!Object.hasOwnProperty.call(obj, typeof x)) {
                obj[typeof x] = 0
            }

            obj[typeof x]++;
        })

        Object.keys(obj).forEach(x => {
            this.push(`${x} = ${obj[x]}`);
        })

        return this;
    }

    return res(args).join('\n');
}
argumentInfo('cat', 42, function () { console.log('Hello world!'); })