# Cypress QA Koordinacija

<!---
## Što je Cypress?

<!---
Javascript end-to-end testing framework.


<!--- 
## Što Cypress omogućava?

<!--- 
* Unit, Integration & end-2-end testing
* Brže i lakše pisanje pouzdanih testova
* Pisanje testova dok razvijamo aplikaciju (TDD)
* Kreiranje test suita nakon razvoja aplikacije (CI)



<!--- 
## Ključna svojstva

 
* Automatsko kreiranje screenshota i snimanje videa kompletnog test suitea
* Debug konzola dok izvršavamo testove
* Automatsko čekanje prilikom učitavanja stranice
* Verifikacija i kontrola funkcija
* Upravljanje mrežnim prometom
* Nema Selenium i WebDrivera

<!--- 
## Ograničenja

<!--- 
* Database manipulacija
* Ne možemo posjetiti 2 različite domene u istome testu
* Više tabova istovremeno
* Više browsera istovremeno

<!--- 
## Kako radi?

<!--- 
* Selenium i sl. radi tako da upravlja browserom preko drivera
* Cypress radi totalno obrnuto - pokreće se u istom kontekstu kao i web aplikacija
* Cypress je Node proces - upravlja sa FE i BE aplikacije, upravlja mrežnim slojem
* Može promijeniti i kod koji bi ga ometao u upravljanju browsera
* Razumije i kontrolira sve što se događa u i izvan browsera

<!--- 
## Demo

<!--- 
### Skinemo projekt:

```bash
git clone https://github.com/csrenato/cypress-demo.git
```

<!--- 
### Instaliramo npm module

```bash
npm install
```

<!--- 
### Napišemo testove

```js
it('Kada odaberm link za prijavu', () => {
    cy.get('#pt-login').click();
  })

  ...
  ...
```

<!--- 
### Pokrećemo cypress

```bash
npm run cypress
```

<!--- 
I otvara nam se Cypress upravljački prozor

<!--- 
### Što sve imamo u Cypress prozoru?

<!--- 
* Tests -> Prikaz dostupnih testova
* Runs -> Online Dashboard
* Settings -> Pregled postavki

<!--- 
### Biramo testove

* Odabiremo prvi test gdje demonstriramo kako sve radimo na ruke

* U drugom testu koristimo page object modele

* Treći test pokazuje kako screenshotati element prije nego što ga kliknemo

* Četvrti test koristi post metodu za dohvat session cookiea

<!--- 
## Slatkiši

* Support/commands -> Custom -> Login, command delay
* Gherkin unutar samog test koda
  
<!--- 
## Šlag na kraju

 
### Runs

* Runs nam omogućava da rezultate svojih testova objavimo na online dashboard



```bash
./node_modules/cypress/bin/cypress run --record --key $CYPRESS_DASHBOARD_KEY
```
