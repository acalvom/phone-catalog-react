describe('Phone Catalog Home Page', () => {
    it('loads successfully', () => {
        cy.visit('http://localhost:3000')

        cy.get('h1').should('have.text', 'Phone Catalog')
        cy.get('button')
            .should('be.visible')
            .should('be.enabled')
    })

    it('navigate to /add when clicking "Add" button', () => {
        cy.get('.home-button-add button').click()
        cy.url().should('include', '/add')
        cy.url().should('eq', 'http://localhost:3000/add')
    })
})
