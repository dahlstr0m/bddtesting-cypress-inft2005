import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given(/^at jeg har åpnet nettkiosken$/, () => {
    cy.visit('http://localhost:8080');
});

When(/^jeg legger inn varer og kvanta$/, () => {
    cy.get('#product').select('Hubba bubba');
    cy.get('#quantity').clear().type('4');
    cy.get('#saveItem').click();

    cy.get('#product').select('Smørbukk');
    cy.get('#quantity').clear().type('5');
    cy.get('#saveItem').click();

    cy.get('#product').select('Stratos');
    cy.get('#quantity').clear().type('1');
    cy.get('#saveItem').click();

    cy.get('#product').select('Hobby');
    cy.get('#quantity').clear().type('2');
    cy.get('#saveItem').click();
});

Then(/^skal handlekurven inneholde det jeg har lagt inn$/, () => {
    // Sjekk innholdet i lista
});

And(/^den skal ha riktig totalpris$/, function () {
    cy.get('#price').should('have.text', '33');
});

