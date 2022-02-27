describe('Add new phone page', () => {
    it('loads successfully', () => {
        cy.visit('http://localhost:3000/add')

        cy.get('h2').should('have.text', ' New phone')
        cy.get('button')
            .should('have.text', 'Add phone')
            .should('be.visible')
            .should('be.enabled')
    })

    it('activates span validation when inputs are empty', () => {
        cy.get('button').click()
        cy.get('span').should('contain.text', 'is required')
    })
})
