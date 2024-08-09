
import './commands'
import './pages/homePage'
import './pages/signUpPage'
import 'cypress-mailslurp'
import 'cypress-fill-command'


Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})