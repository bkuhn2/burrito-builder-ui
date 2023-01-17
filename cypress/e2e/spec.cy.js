
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
    cy.get('h1').should('have.text', 'Burrito Builder').should('be.visible');
  });

  it('Should have existing orders', () => {
    cy.get('.order').first()
      .should('contain', 'Pat')
      .should('contain', 'beans')
      .should('contain', 'lettuce')
      .should('contain', 'carnitas')
      .next()
      .should('contain', 'Sam')
      .should('contain', 'steak')
      .should('contain', 'pico de gallo')
      .should('contain', 'lettuce')
  });

  it('Should have a form with proper inputs', () => {
    cy.get('form').should('be.visible')
    cy.get('input').should('have.value', '')

    cy.get('button').first().should('have.text', 'beans')
      .next().should('have.text', 'steak')
      .next().should('have.text', 'carnitas')
      .next().should('have.text', 'sofritas')
      .next().should('have.text', 'lettuce')
      .next().should('have.text', 'queso fresco')
      .next().should('have.text', 'pico de gallo')
      .next().should('have.text', 'hot sauce')
      .next().should('have.text', 'guacamole')
      .next().should('have.text', 'jalapenos')
      .next().should('have.text', 'cilantro')
      .next().should('have.text', 'sour cream')
  })

  it('When a user fills out the form, the information is reflected in the input fields value', () => {
    cy.get('input')
      .should('have.value', '')
      .type('Brett')
      .should('have.value', 'Brett')
  })

  it('User should be able to add ingredients to their order', () => {
    cy.get('p').first().should('have.text', 'Order: Nothing selected');
    cy.get('button').first().click()
      .next().click()
      .next().click()
    cy.get('p').first().should('have.text', 'Order: beans, steak, carnitas');
  })

})