function createSortedList(){

    let arr=[]
    const obj={
        arr,
        add(num) {this.arr.push(Number(num))},
        remove(num) {
            if (Number(num)<0 | Number(num)>=this.arr.length){
                return
            }else{this.arr.splice(Number(num),1)}
            },
        get(num) {return this.arr[Number(num)]},
        size() {return this.arr.length}

    }

    return obj
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
list.add(7);
list.add(7);
console.log(list.size())
console.log(list.get(1));
list.remove(5);
console.log(list.get(1));
