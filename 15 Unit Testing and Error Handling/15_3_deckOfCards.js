function deck(cards){

    let res=[]

    for (const cardAsString of cards) {
        let face=cardAsString.slice(0, -1)
        let suit=cardAsString.slice(-1)


    try{
        const card=createCard.(face, suit)//calling the function
        res.push(card)

        }catch(err){
            res=['Invalid card: ' + cardAsString]
        }

    }
    console.log(res.join(' '))
    function createCard(face, suit){
        const faces= ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
        const suits={
            'S':'\u2660',
            'H':'\u2665',
            'D':'\u2666',
            'C':'\u2663',
        }

        if (!faces.includes(face)){
            throw new Error('Invalid face:'+ face)
        }
        if (suits[suit]===undefined){
            throw new Error('Invalid suit:'+ suit)
        }



        const result={
            face,//THIS IS COMMIN DIRECTLY FROM THE INPUT PARAMETERS
            suit:suits[suit],
            toString() {return this.face + this.suit}
    }

        return result

    }
}
deck(['AS', '10D', 'KH', '2C'])
deck(['5S', '3D', 'QD', '1C'])