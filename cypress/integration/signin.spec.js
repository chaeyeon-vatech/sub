describe('The Signin Page', function () {
    it('successfully loads & signs in', function () {

        cy.visit('/signin', {
            onBeforeLoad: (win) => {
                win.localStorage.clear()
            }
        })

        cy.url().should('include', '/signin')

        cy.get("#signin").click().should(() =>
            expect(localStorage.getItem('currentUser')).to.eq('test')
        )
    })

    it('successfully logs out', function () {
        cy.url().should('include', '/main')
        cy.contains("Logout").click().should(() =>
            expect(localStorage.getItem('currentUser')).to.eq(null)
        )
        cy.url().should('include', '/signin')
    })
})