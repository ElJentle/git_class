import googlePage from '../../support/pages/pageObject/google-page'

describe('Verify onClick search result link opens on a new tab', () => {

    before(() => {
        cy.visit('https://www.google.com')
    })

    it('Verify onClick search result link opens on a new tab', () => {
        googlePage.validateGoogleHomePage()
        googlePage.performSearch()
        googlePage.verifyResultsPage()
        googlePage.clickSearchResultLink()
        cy.wait(2000)
        googlePage.verifyResultsPage()
    })

    after(() => {
    })

})