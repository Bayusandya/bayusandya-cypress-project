/// <reference types="cypress" />

import {signin} from '../../page-objects/user-auth/signin'
import {cart} from '../../page-objects/cart/cart'

describe('User Cart', function(){

    const Signin = new signin()
    const Cart = new cart()

    beforeEach(function(){
        cy.fixture('userAuthData').as('userAuthData')

        cy.visit('/')
    })

        it('CART-01 - User able to perform add to cart', function(){
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
        })
})