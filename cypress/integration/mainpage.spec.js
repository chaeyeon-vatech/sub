/// <reference types="Cypress"/>

describe('The Main Page', function() {
  it('successfully loads & signs in', function() {
    
    cy.visit('/', {
      onBeforeLoad: (win) => {
        win.localStorage.setItem("currentUser", "test");
      }
    })

    cy.url().should('include', '/')

    cy.get("#user_panel").within(() => {
      cy.get("#table_body").should("be.visible")
        .find("div:eq(0)").click()
    })

    cy.get("#message_panel").within(() => {
      cy.get("#table_body").should("be.visible")
    })
  })
})