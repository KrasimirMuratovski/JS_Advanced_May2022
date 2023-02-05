class Hex  {
    constructor(value) {
        this.value = value
    }

    valueOf() {
        return this.value
    }

    toString() {
        let hexaDecimalValue = this.value.toString(16).toUpperCase()
        return "0x" + hexaDecimalValue
    }

    plus(input)  {
        let result=0
        if (input instanceof Hex) {
            result= this.value+input.value
        }else {
            result=this.value+input

        }
        return new Hex(result)
    }
    minus(input)  {
        let result=0
        if (input instanceof Hex) {
            result= this.value-input.value
            return new Hex(result)
        }else {
            result= this.value-input

        }
        return new Hex(result)
    }



    parse(input) {
        let hexadecimalNum = "0x" + input;
        let decilamNum = parseInt(hexadecimalNum);
        return decilamNum;
    }
}


let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 === 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA'));
