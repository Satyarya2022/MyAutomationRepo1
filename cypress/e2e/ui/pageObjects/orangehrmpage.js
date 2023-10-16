import orangehrm from "../../../fixtures/orangehrm.json"
import addemployee from "../../../fixtures/addemployee.json"

class orangehrmpage {


login(username,password){
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get('input[name="username"]').type(orangehrm.username)
    cy.get('input[type="password"]').type(orangehrm.password)
    cy.get('button[type="submit"]').click()
    cy.wait(3000)
}

leftpanelmenu(options){

    cy.contains('span',options).click()
}

addemployee(){
    const randomnum = Math.random().toString().charAt(5)
    cy.contains('button',' Add ').click()
    cy.get('input[placeholder="First Name"]').type(addemployee.FirstName +randomnum)
    cy.get('input[placeholder="Last Name"]').type(addemployee.LastName +randomnum)
    cy.get('[class="oxd-input oxd-input--active"]').eq(1).clear().type(addemployee.Employeeid +randomnum)
    cy.get('input[type="checkbox"]').check({force:true}).should('be.checked')
    cy.contains('label','Username').should('have.text','Username')
    cy.contains('Username').parent().siblings().type(addemployee.Username+randomnum)
    cy.contains('Password').parent().siblings().type(addemployee.Password)
    cy.contains('Confirm Password').parent().siblings().type(addemployee.ConfirmPassword)
    cy.contains('button',' Save ').click()
    cy.get('.toast-message').should('be.visible').should('have.text', 'Sucessfully Saved.');



}

}
 export default new orangehrmpage()