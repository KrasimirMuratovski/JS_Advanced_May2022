function extensibleObject() {
    let proto={}
    let inst=Object.create(proto)

    inst.extend = function (templates){
        Object..entries(templates).forEach(([key, value]) =>{
            if (typeof value ==='function') {
                proto[key]=value
            }else {
                inst[key]=value
            }
        })
    }
    return inst
}

const myObj = extensibleObject();


///
// Create an object that can clone the functionality of another object into itself. Implement an extend(template) function that would copy all of the properties of the template to the parent object and if the property is a function, add it to the object’s prototype instead.
//     Input / Output
// Your code should return the extensible object instance. The extend() function of your object will receive a valid object as an input parameter and has no output.
//     Examples
