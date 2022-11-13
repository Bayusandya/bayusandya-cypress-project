export class signin{

    username(){
        return cy.get('#user-name')
    }

    password(){
        return cy.get('#password')
    }

    signinButton(){
        return cy.get('#login-button')
    }

    productPage(){
        return cy.get('.title')
    }

    loginLogo() {
        return cy.get('.login_logo')
    }
}