function wUpCase(str) {
    // console.log(str.match(/\w+/g).join(", ").toLocaleUpperCase());

    str=String(str)
    str=str.replace(',','')
    let newstr=[]
    let mas=str.split(' ')
    for (const ma of mas) {

        newstr.push(ma.toUpperCase())
    }
    console.log(newstr)
    console.log(newstr.join(', '))

}

console.log(wUpCase('Hi, how are you?'))