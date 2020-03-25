import 'cypress-localstorage-commands'

const COMMAND_DELAY = 3000;

for (const command of ['visit', 'click', 'trigger', 'type', 'clear', 'reload', 'contains']) {
  Cypress.Commands.overwrite(command, (originalFn, ...args) => {
      const origVal = originalFn(...args);

      return new Promise((resolve) => {
          setTimeout(() => {
              resolve(origVal);
          }, COMMAND_DELAY);
      });
  });
}

Cypress.Commands.add('login', () => { 
  cy.request({
    method: 'POST',
    // url: 'https://en.wikipedia.org/w/api.php?action=clientLogin&format=json',
    url: 'https://en.wikipedia.org/w/api.php?action=login&format=json',
    form: false,
    body: {
      lgname: Cypress.env('WIKI_USERNAME'),
      lgpasswordsword: Cypress.env('WIKI_PASSWORD'),
      lgtoken: 'enwikiSession'
    }
  })
  .its('body')
  .then(body => {
    cy.setLocalStorage("enwikiSession", body.lgtoken);
  })
});

Cypress.Commands.add('readPDF', () => { 
var PdfReader = require("pdfreader").PdfReader;
new PdfReader().parseFileItems(PDF_PATH, function(err, item){
  if (item && item.text)
    console.log(item.text);
});

});