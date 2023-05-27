describe("Newsletter Subscribe Form", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000")
    })
  





 it("allows users to subscribe to the email list", () => {
   cy.getDataBy('email-input').type("ai@aow.com")
   cy.getDataBy('submit-button').click()
   cy.getDataBy("success-message").should('exist').contains('ai@aow.com')

    })


    it("does NOT allow an invalid email address", () => {

    cy.getDataBy('email-input').type('tom')
    cy.getDataBy('submit-button').click()
    cy.getDataBy("success-message").should('not.exist')
    })


})








    
      
  
  