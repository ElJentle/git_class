import googlePage from '../../support/pages/pageObject/google-page'

describe('Verify search input field supports auto suggestion', () => {

    before(() => {
        cy.visit('https://www.google.com')
        cy.url().should('contain', 'https://www.google.com')
    })

    it('Verify search input field supports auto suggestion', () => {
        googlePage.validateGoogleHomePage()
        googlePage.enterSearchParam()
        googlePage.verifyAutoSuggestion()
    })

    after(() => {
    })

})