let data 
before(( )=>{
    cy.fixture('elements_locator').then((ell)=>{
        data = ell
    });
})

Cypress.Commands.add('clickSignUp', ()=>{
    cy.clickAnElement(data.signUpButton)
})
