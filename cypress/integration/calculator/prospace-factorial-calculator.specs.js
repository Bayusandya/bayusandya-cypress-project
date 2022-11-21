import {factorialCalc} from '../../page-objects/calculator/factorialCalc'

describe('Count Factorial', function(){

    const input = new factorialCalc()
    const count = new factorialCalc()
    const result = new factorialCalc()
    
    beforeEach(function(){

        cy.fixture('calcInputData').as('calcInputData')
        cy.visit('http://z29vzcbmaw5kaw5nigzvcib5b3u.prospace.io/')
    })

        it('Count 0', function(){
            input.number().type(this.calcInputData.input0)
            count.getFactorial().click()
            result.result().should('contain.text', "1")
        })

        it('Count 50', function(){
            input.number().type(this.calcInputData.input50)
            count.getFactorial().click()
            result.result().should('contain.text', "3.0414093201713376e+64")
        })

        it('Count 100', function(){
            input.number().type(this.calcInputData.input100)
            count.getFactorial().click()
            result.result().should('contain.text', "9.33262154439441e+157")
        })

        it('Count 171', function(){
            input.number().type(this.calcInputData.input171)
            count.getFactorial().click()
            result.result().should('contain.text', "1.24101807 E+309")
        })
})