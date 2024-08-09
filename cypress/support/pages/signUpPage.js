let data 
let emailAddress
let inboxId

import {faker} from '@faker-js/faker'

before(()=>{
    cy.fixture('elements_locator').then((ell)=>{
        data = ell
    });

})

Cypress.Commands.add('checkHeader', ()=>{
    cy.clickAnElement(data.signUpTitle)
})

Cypress.Commands.add('insertEmail', ()=>{
    cy.insertEmail()
})

//command to click all the buttons
Cypress.Commands.add('clickNextButton', (text)=>{
    cy.get('button').contains(text).should('be.visible').click()
})

//command to insert all the field
Cypress.Commands.add('insertDetails', (field)=>{
    switch(field){
    case 'full name':
        cy.insertValue(data.fullNameield, faker.person.fullName())
        break

    case 'business name':
        cy.insertValue(data.businessNameField, faker.company.buzzVerb())
         break 

    case 'business phone number':
        cy.insertValue(data.businessPhoneField, faker.phone.number('81135######'))
         break

    case 'twitter handle':
        cy.insertValue(data.twitterField, 'marie')
         break
         
    case 'password':
            cy.insertValue(data.password, 'Test@1234')

    

}})

Cypress.Commands.add('howDidYouHearAboutUs', (text)=>{
    cy.clickAnElement(data.hearAboutUs)  
    cy.get(data.infoOption).contains(text).click()
})

Cypress.Commands.add('insertEmail', ()=>{
    cy.mailslurp().then(mailCreate => mailCreate.createInbox().then(inbox=>{
        emailAddress = inbox.emailAddress
        inboxId = inbox.id
        cy.insertValue(data.businessEmailField, emailAddress)
    }))
    
})



Cypress.Commands.add('extractOTP', ()=>{
    cy.mailslurp().then(mailRetrieve=>mailRetrieve.waitForLatestEmail(inboxId, 30000, true).then(email=>{
       const emailBody = email.body
       const parser = new DOMParser()
       const doc = parser.parseFromString(emailBody, 'text/html')
       const code = doc.querySelector('tr:nth-child(2) p:nth-child(3)').textContent
       const OTP = code.trim()
       cy.log(inboxId, OTP)
       cy.insertMultipleData(data.inputField, OTP)

    }))
})
