# BDD-testing med cucumber og cypress
Kvalitet i og testing av programvaresystemer [INFT2005](https://www.ntnu.no/studier/emner/INFT2005) Vår 2021

Dette er en superenkel eksempelapplikasjon som er satt opp med BDD-testing med cucumber og cypress. Applikasjonen serverer en enkel nettbutikk med express.js, og tester funksjonalitetene i denne gjennom cucumber og cypress.

### Instruksjoner

1. Klon prosjektet:

```
git clone https://github.com/dahlstr0m/bddtesting-cypress-inft2005.git
```

2. Installer avhengigheter med npm:

```
cd bddtesting-cypress-inft2005
npm install
```

3. Kjør express-serveren med applikasjonen:

```
npm start
```

4. Sjekk at applikasjonen kjører:

[http://localhost:8080](http://localhost:8080)

5. Kjør testene

Det er lagt inn script-definisjon i package.json så vi kan enkelt kjøre testene med:

```
npm test
```

6. Sjekk resultatet

Denne testen kjørte nå i en "headless" eller virtuell browser, og testrapport vises i konsollet.
En video fra den virtuelle nettleseren kommer i mappen *cypress/video* etter kjøring.
Ved feil kommer det også skjermdumper under *cypress/screenshots*.
