/// <reference types="Cypress" />

import orangehrmpage from "../pageObjects/orangehrmpage.js"

describe('orangehrm url suite',function(){

    it('orangehrm url ',function(){

    orangehrmpage.login()
    orangehrmpage.leftpanelmenu('PIM')
    orangehrmpage.addemployee()


        
    })


})