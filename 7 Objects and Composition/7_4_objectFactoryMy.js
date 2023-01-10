
function factory(lib, orders){

    let result = []

    for (const order of orders) {
        const object = {}
        const template=order.template //{ name: 'ACME Printer'},

        for(let prop in template){//name:
            object[prop]=template[prop]
        }

        let fun_names = order.parts
        for (let fun_name of fun_names){
            object[fun_name]=lib[fun_name]
        }

        result.push(object)

    }
    return result
}


const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};

const orders = [
    {
        template: { name: 'ACME Printer'},
        parts: ['print']
    },
    {
        template: { name: 'Initech Scanner'},
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier'},
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo'},
        parts: ['play']
    }
];
const products = factory(library, orders);
console.log(products);
