/// <reference types="cypress" />

import {signin} from '../../page-objects/user-auth/signin'
import {cart} from '../../page-objects/cart/cart'
import {checkout} from '../../page-objects/checkout/checkout'

describe('User Checkout', function(){

    const Signin = new signin()
    const Cart = new cart()
    const Checkout = new checkout()

    beforeEach(function(){
        cy.fixture('userAuthData').as('userAuthData')

        cy.visit('/')
    })

        it('CHECKOUT-01 - User able to do checkout', function(){
            Signin.username().type(this.userAuthData.username)
            Signin.password().type(this.userAuthData.password)
            Signin.signinButton().click()
            Signin.productPage().should('contain.text', 'Products')
            Cart.addBackpack().click()
            Cart.addBikeLight().click()
            Cart.addShirt().click()
            Cart.cart().click()
            Cart.cartList().should('contain.text', "Sauce Labs Backpack")
            Cart.cartList().should('contain.text', "Sauce Labs Bike Light")
            Cart.cartList().should('contain.text', "Sauce Labs Bolt T-Shirt")
            Checkout.checkout().click()
            Checkout.firstName().type(this.userAuthData.firstName)
            Checkout.lastName().type(this.userAuthData.lastName)
            Checkout.postalCode().type(this.userAuthData.postalCode)
            Checkout.continueButton().click()
            Checkout.finishButton().click()
            Checkout.completeOrder().should('contain.text', "THANK YOU FOR YOUR ORDER")
            Checkout.backHome().click()
        })
})