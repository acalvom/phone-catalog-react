describe('Phone Catalog Home Page', () => {
    it('loads successfully', () => {
        cy.visit('http://localhost:3000')

        cy.get('h1').should('have.text', 'Phone Catalog')
        cy.get('button')
            .should('be.visible')
            .should('be.enabled')
    })
})
