describe('home page', () => {
  beforeEach(()=>{

    cy.visit('http://localhost:3000')
  })

  context("HeroSection", ()=>{
  xit('the h1 contains the correct test', () => {
 
    cy.getDataBy('hero-heading').contains("Testing Next.js Applications with Cypress")
  })


  xit("the features on the homepage are correct", () => {
   
    cy.get('dt').eq(0).contains("4 Courses")
    cy.get('dt').eq(1).contains("25+ Lessons")
    cy.get('dt').eq(2).contains("Free and Open Source")


  })

})



  context("CoursesSection",()=>{

    it("Course: Testing Your First Next.js Application", () => {

      cy.getDataBy("course-1").find("a").eq(3).click()
      cy.location("pathname").should("eq","/testing-foundations")
        
    })
})

})