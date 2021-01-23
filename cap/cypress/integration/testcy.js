describe('My First cssssssshchemanu Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
    })

    it('form testing',()=>{
      cy.visit("http://localhost:3001/")
      cy.get('form').within(($form)=>{
        cy.get('input').first().type("test cy")
        cy.get('input').eq(1).type("test 2")
        cy.get('input').eq(2).type("test3")
        cy.contains("Save").click()

      })
    })
  })
  