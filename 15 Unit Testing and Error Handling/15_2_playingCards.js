function solve(){

    let card_template={
        face:[2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'],
        suit:{S:'',h:'' }
    }

    function createCard(newFace, newSuit){
        let newCard={}
        newCard['face']=newFace
        newCard['suit']=newSuit
        return newCard
    }
    return createCard

}
let card=solve()
console.log(card('A', 'S'))