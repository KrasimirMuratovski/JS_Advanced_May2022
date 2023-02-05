function solve(arr){

    class Juice {
        constructor(juice) {
            this.juice = juice
            this.quantity = 0
            this.bottles = 0
        }

        bottle(quantity){
            this.quantity+=Number(quantity)
            if (this.quantity>=1000){
                let current_bottles=Math.floor(this.quantity/1000)
                this.bottles+=current_bottles
                // console.log(`${this.juice} => ${current_bottles}`)
                this.quantity=this.quantity%1000
            }
        }

        toString(){
            return this.bottles
        }
    }
    let juices={}
    for (const el of arr) {
        let [juice, quantity]=el.split(' => ')
        if(!juices[juice]){
            juices[juice]=new Juice(juice)
            // juices.push()
        }
        juices[juice].bottle(quantity)


        // console.log(juice, quantity)

    }
    // juices[juice]
    console.log(Object.entries(juices).filter(x=>x=='2'))



}

solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
)
// solve(['Kiwi => 234',
//     'Pear => 2345',
//     'Watermelon => 3456',
//     'Kiwi => 4567',
//     'Pear => 5678',
//     'Watermelon => 6789']
// )
