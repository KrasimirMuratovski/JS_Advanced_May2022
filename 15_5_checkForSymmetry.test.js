const {expect, assert} =require('chai')
const {isSymmetric} =require('./15_5_checkForSymmetry')

describe('Symetry test',()=>{
    it('works with symetric numeric array', ()=>{
        expect(isSymmetric([1,2,2,1])).to.be.true
    })

    it('returns false with non-symetric numeric array', ()=>{
        expect(isSymmetric([1,2,2,0])).to.be.false
        // assert.equal(isSymmetric([1,2,3]), false, 'message')
        // expect(()=> isSymmetric([1,2,3,4])).to.throw()
    })


    it('returns false for non array', ()=>{
        expect(isSymmetric('a')).to.be.false
    })

    it('works with symetric odd-length array', ()=>{
        expect(isSymmetric([1,2,1])).to.be.true
    })

    it('works with symetric string array', ()=>{
        expect(isSymmetric(['a','b','b','a'])).to.be.true
    })


    it('returns false for string params', ()=>{
        expect(isSymmetric('abba')).to.be.false
    })

    it('returns false for type missmatched params', ()=>{
        expect(isSymmetric([1,2,'1'])).to.be.false
    })

})