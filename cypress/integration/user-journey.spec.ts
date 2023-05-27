describe("User Journey", () => {
    it("a user can find a course on the home page and complete the courses lessons", () => {
        cy.visit("http://localhost:3000")
        cy.getDataBy("course-1").find("a").eq(3).click()
        cy.location("pathname").should("eq","/testing-foundations")
        cy.getDataBy('next-lesson-button').click()
        cy.location("pathname").should("eq","/testing-foundations/testing-is-a-mindset")
        cy.getDataBy("challenge-answer-0").click()
        cy.getDataBy("next-lesson-button").should("exist").click()
        cy.location("path").should("eq","/testing-foundations/knowing-what-to-test")




    })
  })