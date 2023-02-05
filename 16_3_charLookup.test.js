const {expect, assert} =require('chai')
const {lookupChar} =require('./16_3_charLookup')

describe('Test Suite',()=>{
    it('string and number', ()=>{
        expect(lookupChar('asdfgh',3)).to.equal('f', 'string and number')
    })

    it('string and number', ()=>{
        expect(lookupChar('asdfgh',0.1)).to.equal(undefined)
    })
    it('zeros', ()=>{
        expect(lookupChar(0, 0)).to.equal(undefined)
    })

    it('two strings', ()=>{
        expect(lookupChar('rty','tg')).to.equal(undefined)
        // expect(sum(3.15,5.2)).to.equal(8.351, 'Does not work with float')
        //assert.equal(isSymmetric([1,2,3]), false, 'message')
        //expect(()=> isSymmetric([1,2,3,4])).to.throw()
    })
    it('not a string and not number', ()=>{
        expect(lookupChar(5,'tg')).to.equal(undefined)

    })
    it('two strings', ()=>{
        expect(lookupChar('dfdb','2')).to.equal('Incorrect index')

    })

    it('incorrect index', ()=>{
        expect(lookupChar('rty',5)).to.equal('Incorrect index')
    })

    it('incorrect negative index', ()=>{
        expect(lookupChar('rty',-5)).to.equal('Incorrect index')
    })

})