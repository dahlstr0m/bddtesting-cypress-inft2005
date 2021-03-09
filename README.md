# BDD-testing med cucumber og cypress

Dette er en superenkel eksempelapplikasjon som er satt opp med BDD-testing med cucumber og cypress. Applikasjonen server en enkel webside med express.js.

### Instruksjoner

1. Klon prosjektet:

```
git clone https://gitlab.stud.idi.ntnu.no/nilstesd/cypress-bdd-start.git
```

2. Installer avhengigheter med npm:

```
cd cypress-start
npm install
```

3. Kjør express-serveren med applikasjonen:

```
npm start
```

4. Sjekk at applikasjonen kjører:

[http://localhost:8080](http://localhost:8080)

5. Kjør cypress:

Åpne et nytt konsoll i prosjektmappen. 

```
npx cypress open
```

Hvis du får feilmelding som sier at cypress executable ikke er funnet kan du kjøre følgende før du prøver å starte cypress på nytt (jeg måtte det):

```
npx cypress install
```

(npx er inkludert med npm > v5.2)

6. Kjør testene

Det er lagt inn script-definisjon i package.json så vi kan enkelt kjøre testene med:

```
npm test
```

7. Sjekk resultatet

Denne testen kjørte nå i en "headless" eller virtuell browser. Dette betyr at vi også kan kjøre testene som endel av et skript, f.eks på en CI-server. 
Resultatet vises på konsollet, men kan også sees i en video under mappen *cypress/video*.
Ved veil kommer det også skjermdumper under *cypress/screenshots*.