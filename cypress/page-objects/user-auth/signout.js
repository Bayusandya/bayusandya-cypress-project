export class signout{

    sidebarButton(){
        return cy.get('#react-burger-menu-btn')
    }

    signoutButton(){
        return cy.get('#logout_sidebar_link')
    }

}