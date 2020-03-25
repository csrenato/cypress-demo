import * as wikipedia from '../../../elements/pages/wikipedia-objects';

/// <reference types="cypress" />

wikipedia.showCookiesConsole();

describe('Wikipedija prijava', () => {

  beforeEach(function () {
    wikipedia.preserveCookies();
  })

  // afterEach(function () {
  //   cy.screenshot();
  // })

  it('1. Zadano da se nalazim na glavnoj stranici', () => {
    wikipedia.navigateHome()
    wikipedia.location_isHomeEN();
  })

  it('2. I prethodno nisam prijavljen u aplikaciju', () => {
    wikipedia.label_anonUser().contains('Not logged in');
  })

  it('3. Kada odaberm link za prijavu', () => {
    wikipedia.button_Login().click();
  })

  it('4. Onda će mi se prikazati ekran za prijavu', () => {
    wikipedia.location_isLoginEN();
  })

  it('5. Kada unesem ispravno korisničko ime', () => {
    wikipedia.input_username().type(Cypress.env('WIKI_USERNAME')).should('have.value', Cypress.env('WIKI_USERNAME'));
  })

  it('6. I unesem ispravnu zaporku', () => {
    wikipedia.input_password().type(Cypress.env('WIKI_PASSWORD'));
  })

  it('7. I odaberem gumb za prijavu', () => {
    wikipedia.button_LoginAction().screenshot().click();
  })

  it('8. Onda cu mi se prikazati ekran za glavnu stranicu', () => {
    wikipedia.location_isHomeEN();
  })

  it('9. I bit ću prijavljen u aplikaciju', () => {
    wikipedia.label_logedinUser().contains(Cypress.env('WIKI_USERNAME'));
  })
});