export class cart {
    addBackpack(){
        return cy.get('#add-to-cart-sauce-labs-backpack')
    }

    addBikeLight(){
        return cy.get('#add-to-cart-sauce-labs-bike-light')
    }
    
    addShirt(){
        return cy.get('#add-to-cart-sauce-labs-bolt-t-shirt')
    }

    cart(){
        return cy.get('.shopping_cart_link')
    }

    cartList(){
        return cy.get('.cart_list')
    }
    
}