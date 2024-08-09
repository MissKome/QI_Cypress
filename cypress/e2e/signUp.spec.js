import {Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'


Given(/^I am on the mima homepage$/, () => {
	cy.visit('/');
});


Then(/^I should see the sign up form page$/, () => {
	cy.url().should('equal', 'https://staging.trymima.com/signup');
    cy.get('.Login_logintext__center__DbD-L h3').should('contain.text', 'Sign Up')
});


When(/^I fill in the business email$/, () => {
	cy.insertEmail()
});

When(/^I insert the OTP$/, () => {
	cy.extractOTP();
});

Then(/^I should see the dashboard  sidebar content$/, (table) => {
	table.hashes().forEach((row)=>{
		cy.contains(row.panel).should('exist').and('contain.text', row.panel)

	})
});



When(/^I click the "([^"]*)" button$/, (text) => {
	cy.clickNextButton(text)
});


When(/^I fill in the "([^"]*)"$/, (args1) => {
	cy.insertDetails(args1)
});


When(/^I select how I heard about mima through "([^"]*)"$/, (opt) => {
	cy.howDidYouHearAboutUs(opt)
});






