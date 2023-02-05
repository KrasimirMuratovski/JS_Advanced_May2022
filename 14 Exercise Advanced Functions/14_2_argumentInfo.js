function solve(...arr){
    let obj={}
    for (const arrElement of arr) {
        let typeInp=(typeof arrElement)
        console.log(`${typeInp}: ${arrElement}`)

        if (!obj[typeInp]){
            obj[typeInp]=0
        }
        obj[typeInp]+=1
    }
    // console.log(obj)
    const result =Object.entries(obj).sort((a, b)=>b[1]-a[1])
    // console.log(result)
    for (let [k, v] of result) {
        console.log(`${k} = ${v}`);
    }
}


solve('cat', 42, 43, function () { console.log('Hello world!'); })