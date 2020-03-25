export function showCookiesConsole() {
    Cypress.Cookies.debug(true);
}

export function preserveCookies() {
    Cypress.Cookies.preserveOnce('enwikimwuser-sessionId', 'GeoIP', 'enwikiSession');
}

export function navigateHome() {
    cy.visit('https://en.wikipedia.org/');
}

export function location_isHomeEN() {
    cy.location().should((loc) => {
        expect(loc.href).to.eq('https://en.wikipedia.org/wiki/Main_Page');
    })
}

export function location_isLoginEN() {
    cy.location().should((loc) => {
        expect(loc.href).to.eq('https://en.wikipedia.org/w/index.php?title=Special:UserLogin&returnto=Main+Page');
    })
}

export function label_anonUser() {
    return cy.get('#pt-anonuserpage');
}

export function button_Login() {
    return cy.get('#pt-login')
}

export function button_LoginAction() {
    return cy.get('#wpLoginAttempt')
}

export function input_username() {
    return cy.get('#wpName1')
}

export function input_password() {
    return cy.get('#wpPassword1')
}

export function label_logedinUser() {
    return cy.get('#pt-userpage')
}