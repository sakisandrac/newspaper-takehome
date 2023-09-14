describe('User can visit homepage and see headlines', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.intercept(
      "GET",
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=0972421e8f494f9f9c1c8e9740b25347",
      {
        statusCode: 200,
        fixture: "headlines",
      }
    ).as("headlines");
  })

  it('Should be able to see homepage and headlines', () => {
    cy.url().should('include', '/')
    cy.get('.navbar-logo').should('have.text', 'NewsHive')
    cy.get('.logo').should('be.visible')
    cy.get('h1').should('have.text', 'Headlines')
    cy.get('i').should('have.text', 'The top stories from today\'s news in the United States')
    cy.get('.home-main').children().should('have.length', 20)
    cy.get('[aria-label="link to homepage"]').should('have.text', 'business')
  })

  it('Should be able to see details in the article card', () => {
    cy.get(':nth-child(1) > a > .article-text-container > .article-name').should('have.text', 'CNN')
    cy.get(':nth-child(1) > a > .article-text-container > .article-img').should('be.visible')
    cy.get(':nth-child(1) > a > .article-text-container > .article-text > .article-title').should('have.text', 'Novak Djokovic beats Daniil Medvedev to win US Open men’s final, extending his record grand slam titles to 24 - CNN')
    cy.get(':nth-child(1) > a > .article-text-container > .article-text > .text').should('have.text', 'Novak Djokovic won the US Open Sunday, defeating Daniil Medvedev 6-3, 7-6, 6-3 in the men’s final to extend his record grand slam singles titles to 24.')

  })
})