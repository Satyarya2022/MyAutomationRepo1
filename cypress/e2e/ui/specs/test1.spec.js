/// <reference types="Cypress" />
import testpage from "../pageObjects/testpage"
//import test from "../../../fixtures/test.json"



describe('testlogin suite',function(){

 it.only('testlogin with valid data testcase',function(){
testpage.login1()

})

it('testlogin with invalid data testcase', function(){
    testpage.login('Student','password100')


})



})