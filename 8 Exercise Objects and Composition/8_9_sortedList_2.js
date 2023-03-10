function createSortedList(){
    class List {
        constructor() {
            this.elements = [];
            this.size = 0
        }


        add(num) {
            this.elements.push(num)
            this.size++;
            return this.elements.sort((a, b) => a - b);
        }

        remove(index) {
            if (index >= 0 && index < this.elements.length) {
                this.elements = this.elements.filter((x, y) => y !== index)
                // this.elements.splice(index, 1)
                this.size--;
            } else {
                return 'throw an error'
            }

            return this.elements.sort((a, b) => a - b);
        }

        get(index) {
            if (index >= 0 && index < this.elements.length) {
                return this.elements[index];
            } else {
                // throw new Error('Index otside boundary')
                return
            }
        }
    }
    return new List()

}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
