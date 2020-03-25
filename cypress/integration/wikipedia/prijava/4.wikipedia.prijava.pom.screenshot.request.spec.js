import * as wikipedia from '../../../elements/pages/wikipedia-objects';

// ~1.5s

/// <reference types="cypress" />

wikipedia.showCookiesConsole();

Cypress.Cookies.defaults({
  whitelist: "enwikiSession"
})

describe('Wikipedija prijava', () => {

  beforeEach(function () {
    cy.restoreLocalStorage();
    // cy.login();
  })

  it('1. Zadano da se nalazim na glavnoj stranici', () => {
    wikipedia.navigateHome()
    wikipedia.location_isHomeEN();
  })

  it('2. I prethodno nisam prijavljen u aplikaciju', () => {
    wikipedia.label_anonUser().contains('Not logged in');
  })

  it('3. Kada se prijavim preko POST metode', () => {
    cy.login();
    cy.saveLocalStorage();
  })

  it('4. Onda će mi biti postavljen session cookie', () => {
    cy.getCookie('enwikiSession').should('exist');
  })
});