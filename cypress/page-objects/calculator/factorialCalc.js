export class factorialCalc {

    number(){
        return cy.get('#number')
    }

    getFactorial(){
        return cy.get('#getFactorial')
    }

    result(){
        return cy.get('#resultDiv')
    }
    
}