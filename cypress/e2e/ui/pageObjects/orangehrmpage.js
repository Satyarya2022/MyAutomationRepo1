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
    cy.wait(3000)
    cy.get('input[placeholder="First Name"]').type(addemployee.FirstName +randomnum)
    cy.get('input[placeholder="Last Name"]').type(addemployee.LastName +randomnum)
    cy.get('[class="oxd-input oxd-input--active"]').eq(1).clear().type(addemployee.Employeeid +randomnum)
    cy.get('input[type="checkbox"]').check({force:true}).should('be.checked')
    cy.contains('label','Username').should('have.text','Username')
    cy.contains('Username').parent().siblings().type(addemployee.Username+randomnum)
    cy.contains('Password').parent().siblings().type(addemployee.Password)
    cy.contains('Confirm Password').parent().siblings().type(addemployee.ConfirmPassword)
    cy.contains('button',' Save ').click()
    cy.get('.oxd-toast-start').should('be.visible').should('have.text', 'SuccessSuccessfully Saved');



}

addcandidates()
{
    cy.contains('[type="button"]',' Add ').click()
    cy.contains('[type="submit"]',' Save ').click()
    cy.window().then((win) => {
        win.scrollTo(0, 0); // Scroll to the top of the page
      });
      //Verifies if required error shown for FirstName
    cy.contains('.--name-grouped-field div:nth-child(1) div:nth-child(2) + span','Required')
    //Verifies if required error shown for LastName
    cy.contains('.--name-grouped-field div:nth-child(3) div:nth-child(2) + span','Required')
    //Verifies if required error shown for Email
    cy.contains('.oxd-input-group div:nth-child(2) + span','Required')

}
}
 export default new orangehrmpage()

