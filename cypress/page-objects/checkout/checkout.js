export class checkout {
    checkout(){
        return cy.get('#checkout')
    }

    firstName(){
        return cy.get('#first-name')
    }

    lastName(){
        return cy.get('#last-name')
    }

    postalCode(){
        return cy.get('#postal-code')
    }

    continueButton(){
        return cy.get('#continue')

    }

    finishButton(){
        return cy.get('#finish')
    }

    completeOrder(){
        return cy.get('.complete-header')
    }

    backHome(){
        return cy.get('#back-to-products')
    }
}