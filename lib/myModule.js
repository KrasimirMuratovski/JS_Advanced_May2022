function sum(a,b){
    return a+b
}

function prod(a,b){
    return a*b
}

const obj={
    name:'Krasimir'
}
function print(){
    console.log(this.name)
}



module.exports = {
    sum,
    prod,
    print:print.bind(obj)

}

