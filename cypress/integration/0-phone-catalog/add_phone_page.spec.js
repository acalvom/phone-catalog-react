describe('Add new phone page', () => {
    it('loads successfully', () => {
        cy.visit('http://localhost:3000/add')

        cy.get('h2').should('have.text', ' New phone')
        cy.get('button')
            .should('have.text', 'Add phone')
            .should('be.visible')
            .should('be.enabled')
    })

    it('form has 9 fields to fill', () => {
        cy.get('.phone-add-form input').should('have.length', 7)
        cy.get('.phone-add-form textarea').should('have.length', 1)
        cy.get('.phone-add-form select').should('have.length', 1)
    })

    it('activates span validation when inputs are empty', () => {
        cy.get('button').click()
        cy.get('span').should('contain.text', 'is required')
    })

    it('fills eight fields', () => {
        cy.get('.phone-add-form input#phoneName').type("Galaxy Note 2")
        cy.get('.phone-add-form input#phoneColor').type("White")
        cy.get('.phone-add-form input#phonePrice').type("258")
        cy.get('.phone-add-form input#phoneRam').type("6")
        cy.get('.phone-add-form input#phoneProcessor').type("Snapdragon X")
        cy.get('.phone-add-form input#phoneScreen').type('8.2" Oled')
        cy.get('.phone-add-form textarea#phoneDescription').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit.')
        cy.get('.phone-add-form select#phoneManufacturer').select("Samsung")
    })
})
