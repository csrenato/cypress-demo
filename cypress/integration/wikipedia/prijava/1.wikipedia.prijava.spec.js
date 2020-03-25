/// <reference types="cypress" />


// Cypress.Cookies.debug(true)

describe('Wikipedija prijava', () => {

  beforeEach(function () {
    Cypress.Cookies.preserveOnce('enwikimwuser-sessionId', 'GeoIP', 'enwikiSession')
  })

  it('Zadano da se nalazim na glavnoj stranici', () => {
    cy.visit('https://en.wikipedia.org/');
    cy.location().should((loc) => {
      expect(loc.href).to.eq('https://en.wikipedia.org/wiki/Main_Page');
    })
  })

  it('I prethodno nisam prijavljen u aplikaciju', () => {
    cy.get('#pt-anonuserpage').contains('Not logged in');
  })

  it('Kada odaberm link za prijavu', () => {
    cy.get('#pt-login').click();
  })

  it('Onda će mi se prikazati ekran za prijavu', () => {
    cy.location().should((loc) => {
      expect(loc.href).to.eq('https://en.wikipedia.org/w/index.php?title=Special:UserLogin&returnto=Main+Page');
    })
  })

  it('Kada unesem ispravno korisničko ime', () => {
    cy.get('#wpName1')
    .type(Cypress.env('WIKI_USERNAME')).should('have.value', Cypress.env('WIKI_USERNAME'));
  })

  it('I unesem ispravnu zaporku', () => {
    cy.get('#wpPassword1').type(Cypress.env('WIKI_PASSWORD'));
  })

  it('I odaberem gumb za prijavu', () => {
    cy.get('#wpLoginAttempt').click();
  })

  it('Onda će mi se prikazati ekran za glavnu stranicu', () => {
    cy.location().should((loc) => {
      expect(loc.href).to.eq('https://en.wikipedia.org/wiki/Main_Page');
    })
  })

  it('I bit ću prijavljen u aplikaciju', () => {
    cy.get('#pt-userpage').contains(Cypress.env('WIKI_USERNAME'));
  })
});