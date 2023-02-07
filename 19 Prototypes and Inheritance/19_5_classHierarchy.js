
class Figure {
    constructor(units='cm') {
        this.units = units
    }
    get area() {
    }

    changeUnits(value){
        this.units=value
    }

    toString(){
        return `Figures units: ${this.units}`
    }
}

class Circle extends Figure {
    constructor(units='cm', radius) {
        super(units)
        this.radius = radius
    }

    get area() {
        return Math.PI*this.radius**2
    }

    toString(){
        return `Figures units: ${this.type} Area: ${this.area} - radius: ${this.radius}`
    }
}
class Rectangle extends Figure {
    constructor(units='cm', width, height) {
        super(units)
        this.width = width
        this.height = height
    }

    get area() {
        return this.width*this.height
    }

    toString(){
        return `Figures units: ${this.type} Area: ${this.area} - width: ${this.width}, height: ${this.height}`
    }
}

let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5
