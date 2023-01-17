describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

/*
    1. When a user visits the page, they can view the page title and the existing orders
    2. When a user visits the page, they can view the Form with the proper inputs
    3. When a user fills out the form, the information is reflected in the input field's value
*/

describe('BURRITO PAGE TESTS', () => {

  beforeEach(() => {
    cy.intercept('http://localhost:3001/api/v1/orders', {
      method: 'GET',
      fixture: '../fixtures/example.json'
    });
    cy.visit('http://localhost:3000/')
  })

  it('Should have a title', () => {
    cy.get('h1').should('have.text', 'Burrito Builder')
  });

})