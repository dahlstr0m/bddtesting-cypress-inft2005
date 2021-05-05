import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given(/^at jeg har lagt inn varer i handlekurven$/, () => {
  cy.visit("http://localhost:8080");

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

  cy.get("#list> li").should("have.length", 4);
});

And(/^trykket på Gå til betaling$/, () => {
  cy.get("#goToPayment").click();
});

When(
  /^jeg legger inn navn, adresse, postnummer, poststed og kortnummer$/,
  () => {
    cy.get("#fullName").clear().type("Mathias D");
    cy.get("#address").clear().type("Bjørnstjerne Bjørnsons Gate 33");
    cy.get("#postCode").clear().type("0155");
    cy.get("#city").clear().type("Oslo");
    cy.get("#creditCardNo").clear().type("1234567890123456");
  }
);

And(/^trykker på Fullfør kjøp$/, () => {
  cy.get("input[type=submit]").click();
});

Then(/^skal jeg få beskjed om at kjøpet er registrert$/, () => {
  cy.get(".confirmation").first().contains("Din ordre er registrert.");
});

// Given er allerede definert

// And er allerede definert

When(/^jeg legger inn ugyldige verdier i feltene$/, () => {
  cy.get(".formField> input").first().clear().blur();
  cy.get(".formField> input").eq(1).clear().blur();
  cy.get(".formField> input").eq(2).clear().blur();
  cy.get(".formField> input").eq(3).clear().blur();
  cy.get(".formField> input").eq(4).clear().blur();
  cy.get(".formField> input").eq(4).clear().type("mittkortnummer");
});

Then(/^skal jeg få feilmeldinger for disse$/, () => {
  cy.get("#fullNameError").contains("Feltet må ha en verdi");
  cy.get("#addressError").contains("Feltet må ha en verdi");
  cy.get("#postCodeError").contains("Feltet må ha en verdi");
  cy.get("#cityError").contains("Feltet må ha en verdi");
  cy.get("#creditCardNoError").contains(
    "Kredittkortnummeret må bestå av 16 siffer"
  );
});
