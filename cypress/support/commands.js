// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
import { dataCar } from "../pages/newCar";

Cypress.Commands.add("goToWeb", () => {
  cy.visit("http://localhost:3000/");
});

Cypress.Commands.add("newButton", () => {
  cy.visit("http://localhost:3000/");
  cy.xpath("//body/div/div[2]/button").click();
});

Cypress.Commands.add("createData", () => {
  cy.get(".MuiDialogActions-root > :nth-child(2)").click();
});

Cypress.Commands.add("selectTypeAutoManual", () => {
  cy.get("#mui-component-select-transmission_type").click();
  cy.get('[data-value="AUTOMATED_MANUAL"]').click();
});

Cypress.Commands.add("selectTypeManual", () => {
  cy.get("#mui-component-select-transmission_type").click();
  cy.get('[data-value="MANUAL"]').click();
});

Cypress.Commands.add("selectTypeAutomatic", () => {
  cy.get("#mui-component-select-transmission_type").click();
  cy.get('[data-value="AUTOMATIC"]').click();
});

Cypress.Commands.add("selectTypeDirectDrive", () => {
  cy.get("#mui-component-select-transmission_type").click();
  cy.get('[data-value="DIRECT_DRIVE"]').click();
});

Cypress.Commands.add("selectTypeUnknown", () => {
  cy.get("#mui-component-select-transmission_type").click();
  cy.get('[data-value="UNKNOWN"]').click();
});

Cypress.Commands.add("selectSizeLarge", () => {
  cy.get("#mui-component-select-size").click();
  cy.get('[data-value="Large"]').click();
});

Cypress.Commands.add("selectSizeMidsize", () => {
  cy.get("#mui-component-select-size").click();
  cy.get('[data-value="Midsize"]').click();
});

Cypress.Commands.add("selectSizeCompact", () => {
  cy.get("#mui-component-select-size").click();
  cy.get('[data-value="Compact"]').click();
});

Cypress.Commands.add("selectYear", () => {
  cy.get('[data-testid="CalendarIcon"]').click();
  cy.get(":nth-child(120) > .PrivatePickersYear-yearButton").click();
});

Cypress.Commands.add("generateNewCar", () => {
  cy.newButton();
  dataCar.typeCarName("Hyundai");
  dataCar.typeCarModel("Santa Fei");
  cy.selectTypeAutoManual();
  cy.selectSizeLarge();
  dataCar.typeCarStyle("Sedan");
  dataCar.typeCarYear("2021");
  dataCar.typeCarPrice("125000");
  cy.createData();
  cy.wait(2000);
});

Cypress.Commands.add("deleteCar", () => {
  cy.get("[data-id]").invoke("data", "id").as("dataId");
  cy.get("@dataId").then((dataId) => {
    cy.log("dataId : ", dataId);
    const newId = dataId;
    cy.request({
      method: "DELETE",
      url: "http://localhost:5000/car/" + newId,
    });
  });
});

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
