import test from "../../../fixtures/test.json"
class testpage {
    
    login1(username,Password){
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('#username').type(test.username)
        cy.get('#password').type(test.Password)
        cy.get('#submit').click()
        cy.get('[class="post-title"]').should('contain','Logged In Successfully')
    }



}

export default new testpage()