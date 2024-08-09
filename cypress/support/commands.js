Cypress.Commands.add('clickAnElement', (element) => {
    cy.get(element).should('be.visible')
    cy.get(element).click();

})


Cypress.Commands.add('insertValue', (field, text) => {
    cy.get(field).should('exist').type(text);

})


Cypress.Commands.add('insertMultipleData', (field, data) => {
    cy.get(field).each(($el, index) =>{
        cy.wrap($el).type(data[index])
    });
});
