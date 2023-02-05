const {expect, assert} =require('chai')
const {mathEnforcer} =require('./16_4_mathEnforcer')

describe('mathEnforcer',function (){
    describe('addFive',function (){
        it('undefined for non-number input', ()=>{
            expect(mathEnforcer.addFive('5')).to.equal(undefined)
        })
        it('correct for positive integer', ()=>{
            expect(mathEnforcer.addFive(12)).to.equal(17)
        })

        it('correct for negative integer', ()=>{
            expect(mathEnforcer.addFive(-5)).to.equal(0)
        })

        it('correct for float', ()=>{
            expect(mathEnforcer.addFive(3.14)).to.be.closeTo(8.14, 0.01)
        })

    })

    describe('subtractTen',function (){
        it('undefined for non-number input', ()=>{
            expect(mathEnforcer.subtractTen('5')).to.equal(undefined)
        })
        it('correct for positive integer', ()=>{
            expect(mathEnforcer.subtractTen(20)).to.equal(10)
        })

        it('correct for negative integer', ()=>{
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20)
        })

        it('correct for float', ()=>{
    expect(mathEnforcer.subtractTen(10.14)).to.be.closeTo(0.14, 0.01)
        })
    })

    describe('sum',function (){
        it('undefined for invalid 1st input', ()=>{
            expect(mathEnforcer.sum('5', 5)).to.equal(undefined)
        })
        it('undefined for invalid 2nd input', ()=>{
            expect(mathEnforcer.sum(5, '5')).to.equal(undefined)
        })

        it('correct for int input', ()=>{
            expect(mathEnforcer.sum(5, 8)).to.equal(13)
        })
        it('correct for float input', ()=>{
            expect(mathEnforcer.sum(3.5, 8.1)).to.be.closeTo(11.6, 0.01)
        })

    })
})

