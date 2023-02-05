const {expect, assert} =require('chai')
const {isOddOrEven} =require('./16_2_evenOrOdd')

describe('Test Suite',()=>{
    it('works with even', ()=>{
        expect(isOddOrEven('asdf')).to.equal('even', 'Does not work with even')
    })

    it('works with odd', ()=>{
        expect(isOddOrEven('asdff')).to.equal('odd', 'Does not work with odd')
    })


    it('works with odd', ()=>{
        expect(isOddOrEven(['asdff'])).to.equal(undefined, 'Does not work with undefined')
    })


}) //global function when executing with mocha// node test.js would throw an error