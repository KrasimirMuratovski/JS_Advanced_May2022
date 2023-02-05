function solve(...arr) {
    let obj={}
    for (const arrElement of arr) {
        let typeInp=typeof arrElement
        console.log(`${typeof arrElement}: ${arrElement}`)

        if (!obj[typeInp]){
            obj[typeInp]=0
        }
        obj[typeInp]+=1
    }

    Object.entries(obj).sort((a,b) => b[1]-a[1])..forEach((el) =>{console.log(`${el[0]} = ${el[1]}`)} )

}
solve('cat', 42, function () { console.log('Hello world!'); })