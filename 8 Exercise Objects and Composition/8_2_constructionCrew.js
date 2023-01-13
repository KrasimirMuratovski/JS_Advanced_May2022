function someFunction(obj){
  if (obj.dizziness===true) {
        let required_amount=obj.weight*obj.experience*0.1
        obj.levelOfHydrated+=required_amount
        obj.dizziness=false
        // console.log(obj)
        // console.log(required_amount)
    }
    return obj

    // console.log(obj);
}

someFunction({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: false }
)
someFunction({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }
)
// someFunction()