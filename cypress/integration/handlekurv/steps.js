import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given(/^at jeg har åpnet nettkiosken$/, () => {
  cy.visit("http://localhost:8080");
});

When(/^jeg legger inn varer og kvanta$/, () => {
  cy.get("#product").select("Hubba bubba");
  cy.get("#quantity").clear().type("4");
  cy.get("#saveItem").click();

  cy.get("#product").select("Smørbukk");
  cy.get("#quantity").clear().type("5");
  cy.get("#saveItem").click();

  cy.get("#product").select("Stratos");
  cy.get("#quantity").clear().type("1");
  cy.get("#saveItem").click();

  cy.get("#product").select("Hobby");
  cy.get("#quantity").clear().type("2");
  cy.get("#saveItem").click();
});

Then(/^skal handlekurven inneholde det jeg har lagt inn$/, () => {
  cy.get("#list> li")
    .should("have.length", 4)
    .should(($lis) => {
      expect($lis.eq(0).text()).to.contain("1 Stratos");
      expect($lis.eq(1).text()).to.contain("4 Hubba bubba");
      expect($lis.eq(2).text()).to.contain("5 Smørbukk");
      expect($lis.eq(3).text()).to.contain("2 Hobby");
    });
});

And(/^den skal ha riktig totalpris$/, () => {
  cy.get("#price").should("have.text", "33");
});

// Given allerede definert

And(/^lagt inn varer og kvanta$/, () => {
  cy.get("#list> li").should("have.length", 4);
});

When(/^jeg sletter varer$/, () => {
  cy.get("#product").select("Smørbukk");
  cy.get("#deleteItem").click();
});

Then(/^skal ikke handlekurven inneholde det jeg har slettet$/, () => {
  cy.get("#list> li")
    .should("have.length", 3)
    .should(($lis) => {
      expect($lis.eq(0).text()).to.contain("1 Stratos");
      expect($lis.eq(1).text()).to.contain("4 Hubba bubba");
      expect($lis.eq(2).text()).to.contain("2 Hobby");
    });
  cy.get("#price").should("have.text", "28");
});

//Given allerede definert

// La til "andre gang" i dette "Og"-et i scenario, slik at det ikke blir
// forvekslet av Cypress for å være det forrige "Og"-et som skal hentes igjen
And(/^lagt inn varer og kvanta andre gang$/, () => {
  cy.get("#list> li").should("have.length", 3);
});

When(/^jeg oppdaterer kvanta for en vare$/, () => {
  cy.get("#product").select("Hubba bubba");
  cy.get("#quantity").clear().type("6");
  cy.get("#saveItem").click();
});

Then(/^skal handlekurven inneholde riktig kvanta for varen$/, () => {
  cy.get("#list> li")
    .should("have.length", 3)
    .should(($lis) => {
      expect($lis.eq(1).text()).to.contain("6 Hubba bubba");
    });
  cy.get("#price").should("have.text", "32");
});
