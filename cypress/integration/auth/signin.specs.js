/// <reference types="cypress" />

import {signin} from '../../page-objects/user-auth/signin'

describe('User Auth', function(){

    const Signin = new signin()

    beforeEach(function(){
        cy.fixture('userAuthData').as('userAuthData')

        cy.visit('/')
    })

        it('AUTH-01 - User able to do sign in', function(){
            Signin.username().type(this.userAuthData.username)
            Signin.password().type(this.userAuthData.password)
            Signin.signinButton().click()
            Signin.productPage().should('contain.text', 'Products')
        })
})